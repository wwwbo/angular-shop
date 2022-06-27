import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'index'
  },
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'index',
        component: ProductIndexComponent
      },
      {
        path: 'shop',
        component: ProductShopComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
