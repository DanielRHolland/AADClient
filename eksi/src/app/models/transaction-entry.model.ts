import { Product } from './product.model';

export class TransactionEntry {
  constructor(
    public entryId: string,
    public productId: string,
    public quantity: number,
    public product: Product = null) {}
}
