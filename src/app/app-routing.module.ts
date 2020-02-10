import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SalePointsComponent} from './sale-points/sale-points.component';
import {OffersComponent} from './offers/offers.component';
import {UsersComponent} from './users/users.component';
import {RolesComponent} from './roles/roles.component';
import {UsermanagementsComponent} from './usermanagements/usermanagements.component';
import {PermissionsComponent} from './usermanagements/permissions/permissions.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'salepoint', component: SalePointsComponent},
  {path: 'offer', component: OffersComponent},
  {path: 'user', component: UsersComponent},
  {path: 'role', component: RolesComponent},
  {path: 'permission', component: PermissionsComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'usermanagement', component: UsermanagementsComponent,
    children: [
      {path: 'role', component: RolesComponent},
      {path: 'user', component: UsersComponent},
      {path: 'permission', component: PermissionsComponent},
      {path: '**', redirectTo: '/usermanagement', pathMatch: 'full'}
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
  NotFoundComponent,
  SalePointsComponent,
  OffersComponent,
  UsersComponent,
  RolesComponent,
  UsermanagementsComponent,
  PermissionsComponent,
  ProductsComponent
];
