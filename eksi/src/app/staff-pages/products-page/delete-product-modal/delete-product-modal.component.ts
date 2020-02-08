import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.css']
})

export class DeleteProductModalComponent implements OnInit
{

  constructor(public dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product )
  {

  }

  onNoClick() {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }
}
