import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.css']
})

export class AddTransactionModalComponent implements OnInit
{

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTransactionModalComponent>)
  {

  }

  onNoClick(): void
  {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }
}
