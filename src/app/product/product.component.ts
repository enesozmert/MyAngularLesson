import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() { }
  title = "Ürün Listesi"
  product: any = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product1: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product2: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product3: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product4: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product5: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  product6: Product = { id: 3, name: "Tencere", price: 2500, description: "asus zenbook", imageUrl: "https://i.pinimg.com/originals/4d/69/db/4d69dbf4cbdf9410bdbbcdc187170435.jpg" }
  products: Product[] = [
    this.product, this.product1, this.product2, this.product3, this.product4, this.product5, this.product6

  ]
  ngOnInit(): void {
  }

}
