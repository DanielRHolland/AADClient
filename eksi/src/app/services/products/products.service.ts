import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';
import { Product } from '../../models/product.model'

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private connSettings: ConnectionSettingsService ) { }

  public getProducts() {
    return this.httpClient.get(this.getOrigin() + '/l');
  }

  public getProduct(id: string) {
    return this.httpClient.get( this.getOrigin() + '/g' + id);
  }

  public saveProduct(product: Product) {
    return this.httpClient.post<Product>(this.getOrigin() + '/s', product, httpOptions);
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/product';
  }
}
