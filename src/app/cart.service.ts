import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  cartUpdated = new EventEmitter();
  constructor(private http: HttpClient) {}
  addToCart(product: Product) {
    const newID = product.id;
    const productIndex = this.items.findIndex((product) => {
      return product.id == newID;
    });

    if (productIndex > -1) {
      const updateProduct = { ...this.items[productIndex] };
      updateProduct.qty += 1;
      this.items[productIndex] = updateProduct;
    } else {
      this.items.push(product);
    }
    this.cartUpdated.emit(this.items);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
