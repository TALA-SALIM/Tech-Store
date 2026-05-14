import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-item.html',
})
export class ProductItemComponent {

  @Input() product!: Product;

  @Output() add = new EventEmitter<Product>();

 addToCart() {
  this.add.emit(this.product);
}
}