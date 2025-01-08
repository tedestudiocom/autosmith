export class Service {
  name: string;
  cover: string;
  price: number;
  description: string;
  constructor(name: string, cover: string, price: number, description: string) {
    this.name = name;
    this.cover = cover;
    this.price = price;
    this.description = description;
  }
}
