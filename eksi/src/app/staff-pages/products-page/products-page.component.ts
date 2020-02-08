import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit
{
  displayedColumns = ['id','name','quantity','locationName','expiryDate','costPrice','description'];
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
    const dialogRef = this.dialog.open(AddProductModalComponent,
      {
      data: {editMode: false}
      });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe( result => this.addProduct(result));
  }

  addProduct(product: Product) {
    this.productsService.saveProduct(product).subscribe( data => console.log('Success'));
  }

  openDialog_EditProduct()
  {
    const dialogRef = this.dialog.open(AddProductModalComponent,
    {
      data : {editMode: true, product: this.products[0]}
    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_DeleteProduct()
  {
    const dialogRef = this.dialog.open(DeleteProductModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  search() {

  }
}
