import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})

export class AddProductModalComponent implements OnInit {
  model: Product = new Product ('', '', 0, '', 0, 0, '');

  editMode = false;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddProductModalComponent>,
             @Inject(MAT_DIALOG_DATA) public product: Product ) {

  }

  onNoClick(): void {
    this.model.id = '';
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit() {
    if (this.product != null) {
      this.model = this.product;
      this.editMode = true;
    }
  }
}
