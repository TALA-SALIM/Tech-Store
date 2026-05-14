import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';
import { Success } from './components/success/success';

const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'cart', component: Cart },
  { path: 'success', component: Success }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}