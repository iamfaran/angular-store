import { Component } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  constructor() {
    console.log(this);
  }
  share() {
    alert('The product has been shared!');
  }
  onNotify() {
    alert('You will be notified when product goes on sale');
  }
}
