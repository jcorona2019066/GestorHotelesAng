export class Facturas{
    constructor(
      public _id: String,
      public servicios: String,
      public reservacion: String,
      public total: Number,
    ){}
  }