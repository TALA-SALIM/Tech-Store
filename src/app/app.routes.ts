import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { Success } from './components/success/success';
import { ProductDetails } from './components/product-details/product-details';


export const routes: Routes = [

     { path: '', component: Home },   // الصفحة الرئيسية
  { path: 'products', component: ProductList },

  { path: 'cart', component: Cart },

  { path: 'checkout', component: Checkout },

  { path: 'success', component: Success },

  { path: 'products/:id', component: ProductDetails }

];