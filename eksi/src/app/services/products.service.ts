import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }


  public getProducts(orderBy: string = "default", searchTerms: string = "", count: number = 10) {
    return this.httpClient.get('./exampleProducts.json');
  }

}
