import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit
{
  displayedColumns = ['id', 'name', 'quantity',
   'locationName', 'expiryDate',
    'costPrice', 'description', 'editButton', 'deleteButton'];
  products;

  constructor(private productsService: ProductsService, public dialog: MatDialog) { }

  ngOnInit()
  {
    this.update();
  }

  update()
  {
    this.productsService.getProducts().subscribe( data => this.products = data );
  }

  openDialog_AddProduct() {
    this.launchProductDialog();
  }

  addProduct(product: Product) {
    this.productsService.saveProduct(product).subscribe( data => {
      console.log('Success');
      this.products.push(product);
    });
  }

  launchProductDialog(item: Product = null) {
     const dialogRef = this.dialog.open(AddProductModalComponent,
      {
      data: item
      });
     dialogRef.afterClosed().subscribe( result => this.addProduct(result));
  }

  openDialog_EditProduct(product: Product) {
    this.launchProductDialog(product);
  }

  openDialog_DeleteProduct(item: Product)
  {
    const dialogRef = this.dialog.open(DeleteProductModalComponent,
    {
      data : item
    });

    dialogRef.afterClosed().subscribe(id => this.deleteProduct(id));
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(data => console.log(data));
  }

  search() {

  }
}
