import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})

export class AddProductModalComponent implements OnInit
{

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddProductModalComponent>)
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
