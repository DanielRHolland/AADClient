import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { Transaction } from '../../models/transaction.model';
import { AuthoService } from '../../services/autho/autho.service';
import { v4 as uuid } from 'uuid';
import { TransactionEntry } from '../../models/transaction-entry.model';
import { ManualModalComponent } from './manual-modal/manual-modal.component';
import { TransactionsService } from '../../services/transactions/transactions.service';
import { ProductsService } from '../../services/products/products.service';
import { ScanModalComponent } from './scan-modal/scan-modal.component';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class CustomerHomeComponent implements OnInit {
  dataSource: MatTableDataSource<TransactionEntry>;
  displayedColumns = ['productId', 'quantity', 'infoButton', 'deleteButton'];

  constructor(public dialog: MatDialog,
              private authoService: AuthoService,
              private transactionsService: TransactionsService,
              private productsService: ProductsService,
              private snackBar: MatSnackBar,
              private location: Location) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TransactionEntry>(new Array<TransactionEntry>());
  }

  openDialog_AddItem()  {
    const dialogRef = this.dialog.open(ManualModalComponent);
    dialogRef.afterClosed().subscribe(id => this.addToList(id));
  }

  addToList(productId: string) {
    if (productId && productId !== '') {
      this.productsService.getProduct(productId).subscribe(data => {
        if (data) {
          const entry = new TransactionEntry(uuid(), productId, 1);
          this.dataSource.data.push(entry);
          this.dataSource.filter = ''; // forces table refresh
        } else {
          this.snackBar.open('No such product exists', 'close');
        }
      },
      error => this.snackBar.open('Action Failed', 'close'));
    }
  }

  openDialog_CheckoutItems() {
    if (this.dataSource.data.length === 0) {
      this.snackBar.open('No items in basket', 'close');
    } else {
    const dialogRef = this.dialog.open(CheckoutModalComponent);
    dialogRef.afterClosed().subscribe(budgetCode => this.checkout(budgetCode));
    }
  }

  checkout(budgetCode: string) {
    if (!budgetCode) {
      this.snackBar.open('No Budget Code Provided', 'close');
    } else {
      const transaction = new Transaction(uuid(), this.authoService.getNNumber(),
      budgetCode, Date.now(), this.dataSource.data);
      this.transactionsService.saveTransaction(transaction).subscribe(
        data => this.saveEntries(data.transactionId, this.dataSource.data),
        error => {console.error('Checkout Failed!'); this.snackBar.open('Checkout Unsuccessful', 'close'); });
    }
  }

  saveEntries(transactionId: string, entries: TransactionEntry[]) {
    this.transactionsService.saveTransactionEntries(transactionId, entries).subscribe(
        data => {console.log('Success!'); this.snackBar.open('Checkout Complete', 'close'); this.location.back(); },
        error => {console.error('Checkout Failed!'); this.snackBar.open('Checkout Unsuccessful', 'close'); });
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
