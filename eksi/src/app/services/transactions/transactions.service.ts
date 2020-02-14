import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ConnectionSettingsService } from '../connection-settings/connection-settings.service'
import { Transaction } from '../../models/transaction.model';
import { TransactionEntry } from '../../models/transaction-entry.model';

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
    return this.httpClient.post<Transaction>(this.getOrigin() + '/s', transaction, this.connSettings.getOptions());
  }
  public deleteTransaction(transactionId: string) {
    return this.httpClient.delete(this.getOrigin() + '/d/' + transactionId);
  }

  public getTransactionEntries(transactionId: string) {
    return this.httpClient.get<TransactionEntry[]>(this.getOrigin() + '/entries/' + transactionId);
  }

  public saveTransactionEntries(transactionId: string, transactionEntries: TransactionEntry[]) {
    return this.httpClient.post<TransactionEntry[]>(this.getOrigin() + '/entries/s/' + transactionId, transactionEntries, this.connSettings.getOptions());
  }

  public getCsv(from: number = 0, to: number = Date.now() / 1000) {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: this.connSettings.getOptions().headers
    };
    return this.httpClient.get(this.getOrigin() + '/csv/' + Math.floor(from) + '/' + Math.floor(to), httpOptions);
  }

  public getReportCsv(from: number = 0, to: number = Date.now() / 1000) {
    const httpOptions = {
      responseType: 'blob' as 'json',
      headers: this.connSettings.getOptions().headers
    };
    return this.httpClient.get(this.getOrigin() + '/report/csv/' + Math.floor(from) + '/' + Math.floor(to), httpOptions);
  }

  private getOrigin() {
    return this.connSettings.getOrigin() + '/transaction';
  }

}
