import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';
import { Product } from '../../models/product.model'



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient, private connSettings: ConnectionSettingsService ) { }

  public getProducts() {
    return this.httpClient.get<Product[]>(this.getOrigin() + '/l');
  }

  public getProduct(id: string) {
    return this.httpClient.get<Product>( this.getOrigin() + '/g/' + id);
  }

  public saveProduct(product: Product) {
    return this.httpClient.post<Product>(this.getOrigin() + '/s', product, this.connSettings.getOptions());
  }

  public deleteProduct(id: string) {
    return this.httpClient.delete( this.getOrigin() + '/d/' + id );
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/product';
  }
}
