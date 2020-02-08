import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Product } from '../../../models/product.model';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})

export class AddProductModalComponent implements OnInit
{
  model: Product = new Product('eg0', 'nom', 1, 'main stores', 1000, 120, 'example 0');



  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddProductModalComponent>,
              private productsService: ProductsService) {

  }

  onNoClick(): void
  {
    this.dialogRef.close(); // Closes the dialog box
  }

  ngOnInit()
  {

  }

  postProduct() {
    this.productsService.saveProduct(this.model).subscribe(
    data => console.log('Success POSTing ' + data ),
    error => console.error(error));
  }
}
