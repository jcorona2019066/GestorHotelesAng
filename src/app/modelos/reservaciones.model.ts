export class Reservaciones{
    constructor(
      public _id: String,
      public fechaInicio: String,
      public fechaFinal: String,
      public precio: Number,
      public cantidad: String,
      public habitacion: String,
      public usuario: String,

    ){}
  }