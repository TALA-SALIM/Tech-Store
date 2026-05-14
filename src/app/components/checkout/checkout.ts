import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html'
})
export class Checkout {

  customerName: string = '';

  constructor(private cartService: CartService) {}

  onNameChange(value: string) {
    this.customerName = value;
  }

  placeOrder() {
    this.cartService.clearCart();
  }
}