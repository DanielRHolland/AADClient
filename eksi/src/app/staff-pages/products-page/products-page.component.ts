import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})

export class ProductsPageComponent implements OnInit {
  displayedColumns = ['id', 'name', 'quantity',
   'locationName', 'expiryDate',
    'costPrice', 'description', 'editButton', 'deleteButton', 'menu'];
  dataSource: MatTableDataSource<Product>; // products: Product[];
  isMobile = false;
  constructor(private productsService: ProductsService, public dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Product>();
    this.update();
    this.isMobile = window.innerWidth < 500;
  }

  update() {
    this.productsService.getProducts().subscribe( data => {
      this.dataSource.data = data;
      this.dataSource.filter = '';
    } );
  }

  openDialog_AddProduct() {
    this.launchProductDialog();
  }

  addProduct(product: Product) {
    if (product && product.id && product.id !== '') {
      this.productsService.saveProduct(product).subscribe( data => {
        console.log('Success');
        this.dataSource.data.push(product);
        this.dataSource.filter = '';
      });
    }
  }

  editProduct(product: Product) {
     if (product && product.id && product.id !== '') {
      this.productsService.saveProduct(product).subscribe( data => {
        console.log('Success');
        this.dataSource.data[this.dataSource.data.findIndex(p => p.id === product.id)] = data;
      });
    }
  }

  launchProductDialog(item: Product = null) {
    const dialogRef = this.dialog.open(AddProductModalComponent,
    {
       data: {product: item}
    });
    if (item) {
      dialogRef.afterClosed().subscribe( result => this.editProduct(result));
    } else {
      dialogRef.afterClosed().subscribe( result => this.addProduct(result));
    }
  }

  openDialog_EditProduct(product: Product) {
    this.launchProductDialog(product);
  }

  openDialog_InfoProduct(item: Product) {
    this.dialog.open(AddProductModalComponent, {
      data: {product: item, disabled: true}
    });
  }

  openDialog_DeleteProduct(item: Product) {
    const msg = 'Are you sure that you want to delete this product? (Product ID: '
    + item.id
    + ', Product Name: '
    + item.name + ')';
    const dialogRef = this.dialog.open(ConfirmDialogComponent,
    {
      data : msg
    });

    dialogRef.afterClosed().subscribe(
      deleteProduct => {
        if (deleteProduct) {
          this.deleteProduct(item.id);
        }
      });
  }

  deleteProduct(id: string) {
    if (id) {
      this.productsService.deleteProduct(id).subscribe(data => {
        console.log(data);
        this.snackbar.open('Deleted Product');
        this.dataSource.data.splice(this.dataSource.data.findIndex(p => p.id === id), 1);
        this.dataSource.filter = '';
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = window.innerWidth < 500;
  }


  search(query: string) {
    console.log(query);
    this.productsService.getProducts(query).subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.filter = '';
    });
  }
}
