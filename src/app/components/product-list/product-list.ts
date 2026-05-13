import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductItemComponent } from '../product-item/product-item';
import { describe } from 'node:test';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent , RouterModule],
  templateUrl: './product-list.html'
})
export class ProductList {
  constructor(private http: HttpClient, private cartService: CartService) {}

addToCart(product: any) {
  this.cartService.addToCart(product);

  alert('Product added to cart!');
}
handleAdd(product: any) {
  this.cartService.addToCart(product);
  alert('Product added to cart!');
}
  products = [
    {
      id: 1, 
      name: 'Laptop',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      description: 'A high-performance laptop suitable for all your computing needs.'

    },

    {
      id: 2,  
      name: 'Phone',
      price: 800,
      imageUrl: 'https://telfonak.com/wp-content/uploads/2025/09/i17-1.webp',
      description: 'A sleek and powerful smartphone for all your communication needs.'
    },

    {
      id: 3,
      name: 'Headphones',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
      description: 'Premium noise-cancelling headphones for an immersive audio experience.'
    }
  ];



 



}


