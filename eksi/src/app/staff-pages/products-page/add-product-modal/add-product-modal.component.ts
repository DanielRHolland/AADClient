import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../../models/product.model';



class InjectedData {
  constructor(public product: Product, public disabled: boolean = false) {}
}

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {
  model: Product = new Product ('', '', 1, '', 0 , 0, '');
  disabled;
  editMode = false;
  date: Date;
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddProductModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: InjectedData) {

  }

  onNoClick(): void {
    this.model.id = '';
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit() {
    if (this.data.product != null) {
      this.model = this.data.product;
      this.editMode = true;
      this.date  = new Date(this.data.product.expiryDate * 1000);
    } else {
      this.date = new Date(Date.now() + 31536000000); //1 year from now
    }
    this.disabled = this.data.disabled;
  }

  onSubmit() {
    this.model.expiryDate = this.date.getTime() / 1000;
    this.dialogRef.close(this.model);
  }
}
