import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';

const routes: Routes = [
  { path: '', component: ProductIndexComponent},
  { path: 'edit/:id', component: ProductEditComponent},
  { path: 'add', component: ProductAddComponent},
  { path: 'delete/:id', component: ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
