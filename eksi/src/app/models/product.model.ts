export class Product {
    constructor(
      public id: string,
      public name: string,
      public quantity: number,
      public locationName: string,
      public expiryDate: number,
      public costPrice: number,
      public description: string
    ) {}
}
