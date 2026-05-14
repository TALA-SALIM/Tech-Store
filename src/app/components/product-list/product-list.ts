import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products: any[] = [];
  message: string | null = null;

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.http.get<any[]>('assets/data.json').subscribe(data => {
      this.products = data;
    });
  }

  handleAdd(product: any) {
    this.cartService.addToCart(product);

    this.message = `${product.name} added to cart ✔`;

    setTimeout(() => {
      this.message = null;
    }, 2000);
  }
}