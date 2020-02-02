import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-transaction-modal',
  templateUrl: './delete-transaction-modal.component.html',
  styleUrls: ['./delete-transaction-modal.component.css']
})

export class DeleteTransactionModalComponent implements OnInit
{

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteTransactionModalComponent>)
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
