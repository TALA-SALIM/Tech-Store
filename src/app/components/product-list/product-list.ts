import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  constructor(private http: HttpClient, private cartService: CartService) {}

addToCart(product: any) {
  this.cartService.addToCart(product);

  alert('Product added to cart!');
}
  products = [
    {
      name: 'Laptop',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'
    },

    {
      name: 'Phone',
      price: 800,
      imageUrl: 'https://telfonak.com/wp-content/uploads/2025/09/i17-1.webp'
    },

    {
      name: 'Headphones',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e'
    }
  ];


 



}


