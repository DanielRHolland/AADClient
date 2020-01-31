import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService
{

  constructor(private httpClient: HttpClient) { }

  public getProducts()
  {
    return this.httpClient.get('./exampleProducts.json');
  }

}
