import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductsService } from '../../services/products.service';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit 
{

  products;

  constructor(private productsService: ProductsService, public dialog: MatDialog) { }

  ngOnInit()
  {
    this.update();
  }

  update()
  {
    this.productsService.getProducts().subscribe( data => this.products = data);
  }

  openDialog_AddProduct()
  {
    const dialogRef = this.dialog.open(AddProductModalComponent,
    {

    });

    // Assigns users entered data to 'colour: string' once complete
    dialogRef.afterClosed().subscribe();
  }

  openDialog_EditProduct()
  {
    const dialogRef = this.dialog.open(EditProductModalComponent,
    {

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

}
