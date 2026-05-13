import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-success',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './success.html',
  styleUrls: ['./success.css']
})
export class Success {
customerName = '';

constructor(private cartService: CartService) {
  this.customerName = this.cartService.getCustomerName();
}
}{}
