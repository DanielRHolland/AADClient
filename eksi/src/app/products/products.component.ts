import { Component, OnInit } from '@angular/core';

import {PRODUCTS} from './products';

interface Product {
  id: number;
  nameofp: string;
  detailsofp: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = PRODUCTS;
  searchText: string;

  constructor() { }

  ngOnInit() {}

}

