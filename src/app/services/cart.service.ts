import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: any[] = [];
  private customerName: string = '';

  getItems() {
    return this.items;
  }

  addToCart(product: any) {
    this.items.push(product);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
  }

  setCustomerName(name: string) {
    this.customerName = name;
  }

  getCustomerName() {
    return this.customerName;
  }
}