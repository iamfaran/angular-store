import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  totalQty: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartUpdated.subscribe((items: Product[]) => {
      this.cartTotal();
    });
  }
  cartTotal() {
    this.totalQty = this.cartService.items.reduce(
      (acc, item) => acc + item.qty,
      0
    );
  }
}
