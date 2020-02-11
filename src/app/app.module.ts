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
import { RolesComponent } from './roles/roles.component';
import { RoleComponent } from './roles/role/role.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import {RoleService} from './shared/role/role.service';
import { UsermanagementsComponent } from './usermanagements/usermanagements.component';

import { PermissionsComponent } from './usermanagements/permissions/permissions.component';
import { PermissionComponent } from './usermanagements/permissions/permission/permission.component';
import { PermissionListComponent } from './usermanagements/permissions/permission-list/permission-list.component';
import {PermissionService} from './shared/permission/permission.service';

import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {ProductService} from './shared/product/product.service';
import { StudiesComponent } from './studies/studies.component';
import { PotentialComponent } from './studies/potentials/potential/potential.component';
import { PotentialListComponent } from './studies/potentials/potential-list/potential-list.component';
import { BrandComponent } from './studies/brands/brand/brand.component';
import { BrandListComponent } from './studies/brands/brand-list/brand-list.component';
import { ParameterComponent } from './studies/parameters/parameter/parameter.component';
import { ParameterListComponent } from './studies/parameters/parameter-list/parameter-list.component';
import { ServiceComponent } from './studies/services/service/service.component';
import { ServiceListComponent } from './studies/services/service-list/service-list.component';
import {BrandService} from './shared/studies/brand/brand.service';
import {ServiceService} from './shared/studies/service/service.service';
import {PotentialService} from './shared/studies/potential/potential.service';
import {ParameterService} from './shared/studies/parameter/parameter.service';
import {PotentialsComponent} from './studies/potentials/potentials.component';
import {BrandsComponent} from './studies/brands/brands.component';
import {ParametersComponent} from './studies/parameters/parameters.component';
import {ServicesComponent} from './studies/services/services.component';


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
    UserListComponent,
    RolesComponent,
    RoleComponent,
    RoleListComponent,
    UsermanagementsComponent,

    PermissionsComponent,
    PermissionComponent,
    PermissionListComponent,

    ProductsComponent,
    ProductComponent,
    ProductListComponent,

    StudiesComponent,

    PotentialsComponent,
    PotentialComponent,
    PotentialListComponent,

    BrandsComponent,
    BrandComponent,
    BrandListComponent,

    ParametersComponent,
    ParameterComponent,
    ParameterListComponent,

    ServicesComponent,
    ServiceComponent,
    ServiceListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [SalePointService, OfferService, UserService,
  RoleService, PermissionService, ProductService,
  BrandService, ServiceService, PotentialService, ParameterService],

  bootstrap: [AppComponent],
  entryComponents: [SalePointComponent, OfferComponent, UserComponent,
  RoleComponent, PermissionComponent, ProductComponent,
  BrandComponent, ServiceComponent, PotentialComponent, ParameterComponent]

})
export class AppModule {
}
