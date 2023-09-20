import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../products';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() item!: Products;
  @Output() shareButton = new EventEmitter<string>();

  constructor() {
    console.log(this);
  }
}
