import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SalePointsComponent} from './sale-points/sale-points.component';
import {OffersComponent} from './offers/offers.component';

import {OfferService} from './shared/offer/offer.service';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'salepoint', component: SalePointsComponent},
  {path: 'offer', component: OffersComponent},
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
  OffersComponent
];
