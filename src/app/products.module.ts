import { AuthGuard } from './guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { DetailsComponent } from './components/details/details.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'product',
    // canActivate:[AuthGuard],
    children:[
      { path: '', component: ProductComponent },
      { path: ':id', component: DetailsComponent },
      { path: ':id/edit', component: ProductEditComponent },
    ]
  }
 
];

@NgModule({
  declarations: [ProductComponent,DetailsComponent ,ProductEditComponent ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
