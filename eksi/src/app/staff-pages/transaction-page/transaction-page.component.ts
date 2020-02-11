import { Component, OnInit } from '@angular/core';
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
'budgetCode', 'timestamp', 'infoButton', 'deleteButton', 'refundButton'];

  constructor(public dialog: MatDialog,
              private transactionsService: TransactionsService,
              private snackBar: MatSnackBar)  {

  }

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(data =>
    this.dataSource = new MatTableDataSource<Transaction>(data));
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
          this.dataSource.data.push(transaction);
          this.saveEntries(data.transactionId, transaction.items);
          // TODO make this refresh
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
    this.transactionsService.deleteTransaction(id).subscribe(data => console.log('deleted transaction'));
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
          this.refundTransaction(transaction);
        }
      });
  }

  private refundTransaction(transaction: Transaction) {
    if (transaction.items) {
    transaction.items.forEach( item => {
      item.quantity = -item.quantity;
    });
    transaction.transactionId = uuid();
    console.log('Refunding Transaction...');
    this.transactionsService.saveTransaction(transaction).subscribe(data => console.log('Transaction refunded'));
    } else {
      console.log('No Transaction Items');
    }
  }

  search(searchTerm: string) {
    console.log(searchTerm);
  }
}
