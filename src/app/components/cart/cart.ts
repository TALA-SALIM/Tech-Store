import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
@Component({ 
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule ],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {

  items: any[] = [];

  constructor(private cartService: CartService) {
    this.items = this.cartService.getItems();
  }

removeItem(index: number) {
  this.cartService.removeItem(index);
  this.message = 'Product removed from cart!';
}
  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  customerName = '';
  saveName() {
  this.cartService.setCustomerName(this.customerName);
}
message = '';

}