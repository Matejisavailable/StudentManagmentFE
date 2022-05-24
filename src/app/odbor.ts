export class Odbor{
  id: number;
  nazov: string;
  konzultant:string;
  katedra:string;
  typ: string;


  constructor(id: number, nazov: string, konzultant: string, katedra: string, typ: string) {
    this.id = id;
    this.nazov = nazov;
    this.konzultant = konzultant;
    this.katedra = katedra;
    this.typ = typ;
  }
}
