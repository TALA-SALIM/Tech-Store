import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html'
})
export class ProductDetails implements OnInit {

  product?: Product;

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      description: 'High performance laptop'
    },
    {
      id: 2,
      name: 'Phone',
      price: 800,
      imageUrl: 'https://telfonak.com/wp-content/uploads/2025/09/i17-1.webp',
      description: 'Latest model phone'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      imageUrl: 'https://telfonak.com/wp-content/uploads/2025/09/i17-1.webp',
      description: 'Noise-cancelling headphones'
    } 
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}