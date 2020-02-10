import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AddTransactionModalComponent } from './add-transaction-modal/add-transaction-modal.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { Transaction } from '../../models/transaction.model';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})

export class TransactionPageComponent implements OnInit {
  dataSource: MatTableDataSource<Transaction>;
  transactions;
  displayedColumns = ['transactionId', 'nNumber',
'budgetCode', 'timestamp', 'infoButton', 'deleteButton', 'refundButton'];

  constructor(public dialog: MatDialog,
              private transactionsService: TransactionsService)  {

  }

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe(data =>
    this.dataSource = new MatTableDataSource<Transaction>(data));
  }

  openDialog_Transaction(transaction: Transaction = null) {
    const dialogRef = this.dialog.open(AddTransactionModalComponent,
    {
      data: transaction
    });
    dialogRef.afterClosed().subscribe( result => this.addTransaction( result ));
  }

  addTransaction(transaction: Transaction): void {
    if (transaction && transaction.transactionId) {
      this.transactionsService.saveTransaction(transaction).subscribe(data => {
          console.log('Success');
          this.dataSource.data.push(transaction);
          // TODO make this refresh
        }
      );
    }
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
    transaction.items.forEach( item => {
      item.quantity = -item.quantity;
    });
    transaction.transactionId = uuid();
    console.log('Refunding Transaction...');
    this.transactionsService.saveTransaction(transaction).subscribe(data => console.log('Transaction refunded'));
  }

  search(searchTerm: string) {
    console.log(searchTerm);
  }
}
