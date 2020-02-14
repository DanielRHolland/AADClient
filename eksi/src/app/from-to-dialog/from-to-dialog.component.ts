import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductModalComponent } from '../staff-pages/products-page/add-product-modal/add-product-modal.component';

class FromToData {
  constructor(public from: Date, public to: Date) {}
}

@Component({
  selector: 'app-from-to-dialog',
  templateUrl: './from-to-dialog.component.html',
  styleUrls: ['./from-to-dialog.component.css']
})
export class FromToDialogComponent implements OnInit {

  fromTo: FromToData;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddProductModalComponent>,
              ) { }

  ngOnInit() {
    this.fromTo = new FromToData(new Date(0), new Date(Date.now()));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close(this.fromTo);
  }

}
