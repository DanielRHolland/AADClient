import { TransactionEntry } from './transaction-entry.model';

export class Transaction {
  constructor(
    public transactionId: string,
    public nNumber: string,
    public budgetCode: string,
    public timeStamp: number,
    public items: TransactionEntry[]
  ) {}
}
