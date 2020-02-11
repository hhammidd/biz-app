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

import {PotentialsComponent} from './studies/potentials/potentials.component';
import {BrandsComponent} from './studies/brands/brands.component';
import {ParametersComponent} from './studies/parameters/parameters.component';
import {ServicesComponent} from './studies/services/services.component';
import { BrandQuestionComponent } from './studies/brands/brand-questions/brand-question/brand-question.component';
import { BrandQuestionListComponent } from './studies/brands/brand-questions/brand-question-list/brand-question-list.component';
import {BrandQuestionsComponent} from './studies/brands/brand-questions/brand-questions.component';
import {BrandQuestionService} from './shared/studies/brand/brand-question.service';
import { BrandAnswersComponent } from './studies/brands/brand-answers/brand-answers.component';
import { BrandAnswerComponent } from './studies/brands/brand-answers/brand-answer/brand-answer.component';
import { BrandAnswerListComponent } from './studies/brands/brand-answers/brand-answer-list/brand-answer-list.component';
import { ParameterQuestionsComponent } from './studies/parameters/parameter-questions/parameter-questions.component';
import { ParameterAnswersComponent } from './studies/parameters/parameter-answers/parameter-answers.component';
import { ParameterAnswerComponent } from './studies/parameters/parameter-answers/parameter-answer/parameter-answer.component';
import { ParameterAnswerListComponent } from './studies/parameters/parameter-answers/parameter-answer-list/parameter-answer-list.component';
import { ParameterQuestionComponent } from './studies/parameters/parameter-questions/parameter-question/parameter-question.component';
import { ParameterQuestionListComponent } from './studies/parameters/parameter-questions/parameter-question-list/parameter-question-list.component';
import {BrandAnswerService} from './shared/studies/brand/brand-answer.service';
import {ParameterQuestionService} from './shared/studies/parameter/parameter-question.service';
import {ParameterAnswerService} from './shared/studies/parameter/parameter-answer.service';


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


    BrandsComponent,

    ParametersComponent,

    ServicesComponent,

    BrandQuestionsComponent,
    BrandQuestionComponent,
    BrandQuestionListComponent,
    BrandAnswersComponent,
    BrandAnswerComponent,
    BrandAnswerListComponent,

    ParameterQuestionsComponent,
    ParameterAnswersComponent,
    ParameterAnswerComponent,
    ParameterAnswerListComponent,
    ParameterQuestionComponent,
    ParameterQuestionListComponent,

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
  BrandQuestionService, BrandAnswerService,
  ParameterQuestionService, ParameterAnswerService],

  bootstrap: [AppComponent],
  entryComponents: [SalePointComponent, OfferComponent, UserComponent,
  RoleComponent, PermissionComponent, ProductComponent,
    BrandQuestionComponent, BrandAnswerComponent,
  ParameterQuestionComponent, ParameterAnswerComponent]
})
export class AppModule {
}
