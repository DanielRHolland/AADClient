import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyModalComponent } from './my-modal/my-modal.component';
import { CheckoutModalComponent } from './checkout-modal/checkout-modal.component';
import { Transaction } from '../../models/transaction.model';
import { AuthoService } from '../../services/autho/autho.service';
import { v4 as uuid } from 'uuid';
import { TransactionEntry } from '../../models/transaction-entry.model';
import { ManualModalComponent } from './manual-modal/manual-modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class CustomerHomeComponent implements OnInit {
  dataSource: MatTableDataSource<TransactionEntry>;
  displayedColumns = ['productId', 'quantity', 'infoButton', 'deleteButton'];

  constructor(public dialog: MatDialog, private httpClient: HttpClient,
              private authoService: AuthoService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<TransactionEntry>(new Array<TransactionEntry>());
  }

  openDialog_AddItem()  {
    const dialogRef = this.dialog.open(ManualModalComponent,
    {

    });
    dialogRef.afterClosed().subscribe(id => this.addToList(id));
  }

  addToList(productId: string) {
    const entry = new TransactionEntry(uuid(), productId, 1);
    this.dataSource.data.push(entry);
    this.dataSource.filter = ''; // forces table refresh
  }

  openDialog_CheckoutItems() {
    const dialogRef = this.dialog.open(CheckoutModalComponent,
    {

    });

    dialogRef.afterClosed().subscribe();
  }

  deleteEntry(entry: TransactionEntry) {
    const i = this.dataSource.data.indexOf(entry);
    this.dataSource.data.splice(i, 1);
    this.dataSource.filter = '';
  }
}
