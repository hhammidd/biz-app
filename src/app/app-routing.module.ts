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
import {StudiesComponent} from './studies/studies.component';
import {BrandsComponent} from './studies/brands/brands.component';
import {ServicesComponent} from './studies/services/services.component';
import {PotentialsComponent} from './studies/potentials/potentials.component';
import {ParametersComponent} from './studies/parameters/parameters.component';
import {BrandQuestionsComponent} from './studies/brands/brand-questions/brand-questions.component';
import {BrandAnswersComponent} from './studies/brands/brand-answers/brand-answers.component';
import {ParameterQuestionsComponent} from './studies/parameters/parameter-questions/parameter-questions.component';
import {ParameterAnswersComponent} from './studies/parameters/parameter-answers/parameter-answers.component';
import {MapComponent} from './map/map.component';
import {NationsComponent} from './map/nations/nations.component';
import {RegionsComponent} from './map/regions/regions.component';
import {ProvincesComponent} from './map/provinces/provinces.component';
import {ComuniComponent} from './map/comuni/comuni.component';
import {CapsComponent} from './map/caps/caps.component';
import {BrandMicrosComponent} from './studies/brands/brand-micros/brand-micros.component';
import {ComuneConfigsComponent} from './map/comune-configs/comune-configs.component';
import {BrandCalculationsComponent} from './studies/brands/brand-calculations/brand-calculations.component';
import {DistributionComponent} from './distribution/distribution.component';
import {LogisticComponent} from './distribution/logistics/logistic/logistic.component';
import {BuyinghouseComponent} from './buyinghouse/buyinghouse.component';
import {PriceinfosComponent} from './buyinghouse/priceinfos/priceinfos.component';
import {ZoneinfosComponent} from './buyinghouse/zoneinfos/zoneinfos.component';
import {CountryappComponent} from './countryapp/countryapp.component';
import {SalepointfilterComponent} from './salepointfilter/salepointfilter.component';
import {SpmaincontainerComponent} from "./spmains/spmaincontainer/spmaincontainer.component";


const routes: Routes = [
  {path: 'salepoint', component: SalePointsComponent},
  {path: 'offer', component: OffersComponent},
  {path: 'user', component: UsersComponent},
  {path: 'role', component: RolesComponent},
  {path: 'permission', component: PermissionsComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'brand', component: BrandsComponent},
  {path: 'service', component: ServicesComponent},
  {path: 'potential', component: PotentialsComponent},
  {path: 'parameter', component: ParametersComponent},

  {path: 'brand-question', component: BrandQuestionsComponent},
  {path: 'brand-answer', component: BrandAnswersComponent},
  {path: 'brand-micro', component: BrandMicrosComponent},
  {path: 'brand-calculations', component: BrandCalculationsComponent},

  {path: 'parameter-question', component: ParameterQuestionsComponent},
  {path: 'parameter-answer', component: ParameterAnswersComponent},

  {path: 'map', component: MapComponent},
  {path: 'nation', component: NationsComponent},
  {path: 'region', component: RegionsComponent},
  {path: 'province', component: ProvincesComponent},
  {path: 'comune', component: ComuniComponent},
  {path: 'cap', component: CapsComponent},
  {path: 'comuneconfig', component: ComuneConfigsComponent},

  {path: 'distribution', component: DistributionComponent},
  {path: 'logistic', component: LogisticComponent},

  {path: 'buyinghouse', component: BuyinghouseComponent},
  {path: 'countryapp', component: CountryappComponent},
  {path: 'priceinfo', component: PriceinfosComponent},

  {path: 'zoneinfo', component: ZoneinfosComponent},

  {path: 'salepointfilter', component: SalepointfilterComponent},
  {path: 'sp', component: SpmaincontainerComponent},

  {
    path: 'studies', component: StudiesComponent,
    children: [
      {path: 'brand', component: BrandsComponent}, // Not working child
      {path: 'service', component: ServicesComponent},
      {path: 'potential', component: PotentialsComponent},
      {path: 'parameter', component: ParametersComponent},

    ]
  },
  {
    path: 'usermanagement', component: UsermanagementsComponent,
    children: [
      {path: 'role', component: RolesComponent},
      {path: 'user', component: UsersComponent},
      {path: 'permission', component: PermissionsComponent},
      {path: '**', redirectTo: '/usermanagement', pathMatch: 'full'}
    ]
  },
  {path: 'home', component: HomeComponent},
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
  ProductsComponent,
  StudiesComponent,
  MapComponent,
  DistributionComponent,
  BuyinghouseComponent,
  CountryappComponent,
  HomeComponent
];
