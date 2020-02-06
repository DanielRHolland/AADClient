import { TransactionEntry } from './transaction-entry.model';

export class Transaction {
  constructor(
    transactionId: string,
    nNumber: string,
    budgetCode: string,
    timeStamp: number,
    items: TransactionEntry[]
  ) {}
}
