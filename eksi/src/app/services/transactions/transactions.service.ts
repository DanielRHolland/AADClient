import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service'
import { Transaction } from '../../models/transaction.model';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient, private connSettings: ConnectionSettingsService) { }

  public getTransactions() {
    return this.httpClient.get<Transaction[]>(this.getOrigin() + '/l');
  }

  public getTransactionsBounded(startDate: number, endDate:number) {
    return this.httpClient.get<Transaction[]>(this.getOrigin() + '/l/' + startDate + endDate);
  }

  public saveTransaction(transaction: Transaction) {
    return this.httpClient.post<Transaction>(this.getOrigin() + '/s', transaction, httpOptions);
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/transaction';
  }

}
