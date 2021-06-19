import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontSiteComponent } from './front-site/front-site.component';

const routes: Routes = [
  // default route

  { path: '', redirectTo: '/appfrontsite', pathMatch: 'full' },
  { path: 'appfrontsite', component:FrontSiteComponent },
  { path: 'authentication', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent, 
    canActivate: [AuthService],
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule ) },
      { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule ) },
      { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule ) }
    ]
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
