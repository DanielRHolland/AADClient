import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service'

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient, private connSettings: ConnectionSettingsService) { }

  public getTransactions() {
    return this.httpClient.get(this.getOrigin + '/l');
  }

  // public saveTransaction() {
  //   return this.httpClient.post
  // }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/transaction';
  }

}
