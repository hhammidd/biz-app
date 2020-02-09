import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SalePointsComponent} from './sale-points/sale-points.component';
import {SalePointListComponent} from './sale-points/sale-point-list/sale-point-list.component';
import {SalePointComponent} from './sale-points/sale-point/sale-point.component';
import {MaterialModule} from './material/material.module';
import {SalePointService} from './shared/sale-point.service';

import {OfferComponent} from './offers/offer/offer.component';
import {OfferListComponent} from './offers/offer-list/offer-list.component';
import {OffersComponent} from './offers/offers.component';
import {OfferService} from './shared/offer/offer.service';

import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserService} from './shared/user/user.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    HomeComponent,
    NotFoundComponent,
    SalePointsComponent,
    SalePointListComponent,
    SalePointComponent,
    OfferComponent,
    OfferListComponent,
    OffersComponent,
    UsersComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [SalePointService, OfferService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [SalePointComponent, OfferComponent, UserComponent]

})
export class AppModule {
}
