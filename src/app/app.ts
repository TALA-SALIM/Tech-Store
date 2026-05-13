import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="/">Home</a>

      <a routerLink="/cart">
        Cart ({{ getCartCount() }})
      </a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-TECH');

  constructor(private cartService: CartService) {}

  getCartCount() {
    return this.cartService.getItems().length;
  }
}