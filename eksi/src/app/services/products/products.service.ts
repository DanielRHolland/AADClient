import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service';

@Injectable({
  providedIn: 'root'
})

export class ProductsService
{

  constructor(private httpClient: HttpClient, private connSettings: ConnectionSettingsService ) { }

  public getProducts() {
    return this.httpClient.get(this.getOrigin() + '/l');
  }

  public getProduct(id: string) {
    return this.httpClient.get( this.getOrigin() + '/g' + id);
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/product';
  }
}
