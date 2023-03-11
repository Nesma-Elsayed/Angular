import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductComponent } from './components/product/product.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [ 

  {path:'welcome', component : WelcomeComponent},
  {path:'', redirectTo:'welcome' ,pathMatch:'full'},
  // { path: 'product', component: ProductComponent },
  // { path: 'product/:id', component: DetailsComponent },
  // { path: 'product/:id/edit', component: ProductEditComponent },
  { path: 'login', component: LoginComponent},
  {path :'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
