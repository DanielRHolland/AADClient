import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddTransactionModalComponent } from './add-transaction-modal/add-transaction-modal.component';
import { EditTransactionModalComponent } from './edit-transaction-modal/edit-transaction-modal.component';
import { DeleteTransactionModalComponent } from './delete-transaction-modal/delete-transaction-modal.component';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})

export class TransactionPageComponent implements OnInit
{
  transactions;

  constructor(public dialog: MatDialog)
  {

  }

  ngOnInit()
  {

  }

  openDialog_AddTransaction()
  {
    const dialogRef = this.dialog.open(AddTransactionModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_EditTransaction()
  {
    const dialogRef = this.dialog.open(EditTransactionModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_DeleteTransaction()
  {
    const dialogRef = this.dialog.open(DeleteTransactionModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }
}
