import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  cartItems = this.cartService.items;
  constructor(private cartService: CartService) {
    console.log(this);
  }
}
