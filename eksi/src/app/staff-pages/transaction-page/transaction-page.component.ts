import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddTransactionModalComponent } from './add-transaction-modal/add-transaction-modal.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { Transaction } from '../../models/transaction.model';
import { MatSnackBar } from '@angular/material';
import { v4 as uuid } from 'uuid';
import { TransactionEntry } from '../../models/transaction-entry.model';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})

export class TransactionPageComponent implements OnInit {
  dataSource: MatTableDataSource<Transaction>;
  transactions;
  displayedColumns = ['nNumber',
 'budgetCode', 'timestamp', 'infoButton', 'deleteButton', 'refundButton', 'menu'];
  isMobile = true;

  constructor(public dialog: MatDialog,
              private transactionsService: TransactionsService,
              private snackBar: MatSnackBar)  {

  }

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(data =>
    this.dataSource = new MatTableDataSource<Transaction>(data));
    this.isMobile = window.innerWidth < 500;
  }

  openDialog_Transaction(transaction: Transaction = null) {
    if (transaction) {
      const tCopy = {...transaction};
      this.transactionsService.getTransactionEntries(tCopy.transactionId).subscribe(entries => {
        tCopy.items = entries;
        this.openTransaction(tCopy);
        });
    } else {
      this.openTransaction(transaction);
    }
  }

  openTransaction(transaction: Transaction = null) {
    const dialogRef = this.dialog.open(AddTransactionModalComponent,
      {
        data: transaction
      });
    dialogRef.afterClosed().subscribe( result => this.addTransaction( result ));
  }

  addTransaction(transaction: Transaction): void {
    if (transaction && transaction.transactionId && transaction.transactionId !== '') {
      this.transactionsService.saveTransaction(transaction).subscribe(data => {
          console.log('Success');
          this.saveEntries(data.transactionId, transaction.items);
          const i = this.dataSource.data.findIndex(t => t.transactionId === data.transactionId);
          if (i !== -1) {
            this.dataSource.data[i] = data;
          } else {
            this.dataSource.data.push(data);
          }
          this.dataSource.filter = '';
        },
        error => {
          console.error('Transaction Failed!'); this.snackBar.open('Action Failed', 'close');
        }
      );
    }
  }


  saveEntries(transactionId: string, entries: TransactionEntry[]) {
    this.transactionsService.saveTransactionEntries(transactionId, entries).subscribe(
        data => {console.log('Success!'); this.snackBar.open('Success', 'close'); },
        error => {console.error('Saving Entries Failed!'); this.snackBar.open('Action Failed', 'close'); });
  }

  openDialog_DeleteTransaction(item: Transaction) {
    const msg = 'Are you sure you want to delete this transaction? (id: '
    + item.transactionId + ')';
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
    {
      data : msg
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.deleteTransaction(item.transactionId);
      }
    });
  }

  private deleteTransaction(id: string) {
    console.log('Deleting Transaction...');
    this.transactionsService.deleteTransaction(id).subscribe(data => {
       console.log('deleted transaction');
       this.snackBar.open('Deleted Transaction', 'close');
       this.dataSource.data.splice(this.dataSource.data.findIndex(t => t.transactionId === id), 1);
       this.dataSource.filter = '';
    });
  }

  openDialog_ProcessRefund(transaction: Transaction) {
    const msg = 'Are you sure you want to refund this transaction? (id: '
    + transaction.transactionId + ')';
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
      {
        data: msg
      });
    dialogRef.afterClosed().subscribe(response => {
        if (response) {
          this.transactionsService.getTransactionEntries(transaction.transactionId).subscribe(entries => {
          transaction.items = entries;
          this.refundTransaction(transaction);
          });
        }
      });
  }

  private refundTransaction(transaction: Transaction) {
    if (transaction.items) {
    transaction.items.forEach( item => {
      item.quantity = -item.quantity;
      item.entryId = uuid();
    });
    transaction.transactionId = uuid();
    console.log('Refunding Transaction...');
    this.transactionsService.saveTransaction(transaction).subscribe(data => {
      this.transactionsService.saveTransactionEntries(data.transactionId, transaction.items).subscribe(entries => {
      console.log('Transaction refunded');
      this.snackBar.open('Transaction refunded', 'close');
      this.dataSource.data.push(data);
      this.dataSource.filter = '';
      });
    });
    } else {
      console.log('No Transaction Items');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 500;
  }

  search(searchTerm: string) {
    console.log(searchTerm);
  }
}
