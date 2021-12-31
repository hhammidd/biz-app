import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SalePointsComponent} from './sale-points/sale-points.component';

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
import {ComuniComponent} from './map/comuni/comuni.component';

import {BrandMicrosComponent} from './studies/brands/brand-micros/brand-micros.component';
import {ComuneConfigsComponent} from './map/comune-configs/comune-configs.component';
import {BrandCalculationsComponent} from './studies/brands/brand-calculations/brand-calculations.component';
import {BuyinghouseComponent} from './buyinghouse/buyinghouse.component';
import {PriceinfosComponent} from './buyinghouse/priceinfos/priceinfos.component';
import {ZoneinfosComponent} from './buyinghouse/zoneinfos/zoneinfos.component';
import {CountryappComponent} from './countryapp/countryapp.component';
import {SalepointfilterComponent} from './salepointfilter/salepointfilter.component';
import {SpmaincontainerComponent} from './spmains/spmaincontainer/spmaincontainer.component';
import {HomegeoComponent} from './homegeo/homegeo.component';
import {SalepointdashboardmapComponent} from './salepointdashboardmap/salepointdashboardmap.component';


const routes: Routes = [
  {path: 'salepoint', component: SalePointsComponent},
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

  {path: 'comune', component: ComuniComponent},

  {path: 'comuneconfig', component: ComuneConfigsComponent},


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
  {path: 'home', component: HomeComponent,
    children: [
      {path: 'homegeo', component: HomegeoComponent},
      {path: 'sp', component: SpmaincontainerComponent},
    ]
  },
  {path: 'homegeo', component: HomegeoComponent},
  {path: 'salepointdashboardmap', component: SalepointdashboardmapComponent},
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
  ProductsComponent,
  StudiesComponent,
  MapComponent,
  BuyinghouseComponent,
  CountryappComponent,
  HomeComponent
];
