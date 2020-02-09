import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { Transaction } from '../../models/transaction.model';
import { AuthoService } from '../../services/autho/autho.service';
import { v4 as uuid } from 'uuid';
import { TransactionEntry } from '../../models/transaction-entry.model';
import { ManualModalComponent } from './manual-modal/manual-modal.component';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { ScanModalComponent } from './scan-modal/scan-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class CustomerHomeComponent implements OnInit {
  dataSource: MatTableDataSource<TransactionEntry>;
  displayedColumns = ['productId', 'quantity', 'infoButton', 'deleteButton'];

  constructor(public dialog: MatDialog, private httpClient: HttpClient,
              private authoService: AuthoService,
              private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TransactionEntry>(new Array<TransactionEntry>());
  }

  openDialog_AddItem()  {
    const dialogRef = this.dialog.open(ManualModalComponent);
    dialogRef.afterClosed().subscribe(id => this.addToList(id));
  }

  addToList(productId: string) {
    if (productId && productId !== '') {
      const entry = new TransactionEntry(uuid(), productId, 1);
      this.dataSource.data.push(entry);
      this.dataSource.filter = ''; // forces table refresh
    }
  }

  openDialog_CheckoutItems() {
    const dialogRef = this.dialog.open(CheckoutModalComponent);
    dialogRef.afterClosed().subscribe(budgetCode => this.checkout(budgetCode));
  }

  checkout(budgetCode: string) {
    const transaction = new Transaction(uuid(), this.authoService.getNNumber(),
    budgetCode, Math.floor(Date.now() / 1000), this.dataSource.data);
    this.transactionsService.saveTransaction(transaction).subscribe(
      data => console.log('Success!'));
  }

  openDialog_ScanItem() {
    const dialogRef = this.dialog.open(ScanModalComponent);
    dialogRef.afterClosed().subscribe(id => this.addToList(id));
  }

  deleteEntry(entry: TransactionEntry) {
    const i = this.dataSource.data.indexOf(entry);
    this.dataSource.data.splice(i, 1);
    this.dataSource.filter = '';
  }
}
