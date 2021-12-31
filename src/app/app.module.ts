import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
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

import {OfferService} from './shared/offer/offer.service';

import {UserService} from './shared/user/user.service';
import {RoleService} from './shared/role/role.service';


import {PermissionService} from './shared/permission/permission.service';

import {ProductsComponent} from './products/products.component';
import {ProductComponent} from './products/product/product.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductService} from './shared/product/product.service';
import {StudiesComponent} from './studies/studies.component';

import {PotentialsComponent} from './studies/potentials/potentials.component';
import {BrandsComponent} from './studies/brands/brands.component';
import {ParametersComponent} from './studies/parameters/parameters.component';
import {ServicesComponent} from './studies/services/services.component';
import {BrandQuestionComponent} from './studies/brands/brand-questions/brand-question/brand-question.component';
import {BrandQuestionListComponent} from './studies/brands/brand-questions/brand-question-list/brand-question-list.component';
import {BrandQuestionsComponent} from './studies/brands/brand-questions/brand-questions.component';
import {BrandQuestionService} from './shared/studies/brand/brand-question.service';
import {BrandAnswersComponent} from './studies/brands/brand-answers/brand-answers.component';
import {BrandAnswerComponent} from './studies/brands/brand-answers/brand-answer/brand-answer.component';
import {BrandAnswerListComponent} from './studies/brands/brand-answers/brand-answer-list/brand-answer-list.component';
import {ParameterQuestionsComponent} from './studies/parameters/parameter-questions/parameter-questions.component';
import {ParameterAnswersComponent} from './studies/parameters/parameter-answers/parameter-answers.component';
import {ParameterAnswerComponent} from './studies/parameters/parameter-answers/parameter-answer/parameter-answer.component';
import {ParameterAnswerListComponent} from './studies/parameters/parameter-answers/parameter-answer-list/parameter-answer-list.component';
import {ParameterQuestionComponent} from './studies/parameters/parameter-questions/parameter-question/parameter-question.component';
import {ParameterQuestionListComponent} from './studies/parameters/parameter-questions/parameter-question-list/parameter-question-list.component';
import {BrandAnswerService} from './shared/studies/brand/brand-answer.service';
import {ParameterQuestionService} from './shared/studies/parameter/parameter-question.service';
import {ParameterAnswerService} from './shared/studies/parameter/parameter-answer.service';
import {MapComponent} from './map/map.component';

import {NationService} from './shared/map/nation.service';

import {RegionService} from './shared/map/region.service';
import {ProvinceService} from './shared/map/province.service';
import {ComuniComponent} from './map/comuni/comuni.component';
import {ComuneComponent} from './map/comuni/comune/comune.component';
import {ComuneListComponent} from './map/comuni/comune-list/comune-list.component';
import {ComuneService} from './shared/map/comune.service';
import {CapService} from './shared/map/cap.service';
import {BrandMicrosComponent} from './studies/brands/brand-micros/brand-micros.component';
import {BrandMicroComponent} from './studies/brands/brand-micros/brand-micro/brand-micro.component';
import {BrandMicroListComponent} from './studies/brands/brand-micros/brand-micro-list/brand-micro-list.component';
import {ComuneConfigsComponent} from './map/comune-configs/comune-configs.component';
import {ComuneConfigComponent} from './map/comune-configs/comune-config/comune-config.component';
import {ComuneConfigService} from './shared/map/comune-config.service';
import {ComuneConfigListComponent} from './map/comune-configs/comune-config-list/comune-config-list.component';
import {BrandCalculationsComponent} from './studies/brands/brand-calculations/brand-calculations.component';
import {BrandCalculationsService} from './shared/studies/brand/brand-calculations.service';
import {BrandCalculationComponent} from './studies/brands/brand-calculations/brand-calculation/brand-calculation.component';
import {BuyinghouseComponent} from './buyinghouse/buyinghouse.component';
import {PriceinfosComponent} from './buyinghouse/priceinfos/priceinfos.component';
import {PriceInfoComponent} from './buyinghouse/priceinfos/price-info/price-info.component';
import {PriceInfoListComponent} from './buyinghouse/priceinfos/price-info-list/price-info-list.component';
import {PriceInfoService} from './shared/buyinghouse/price-info.service';
import {ZoneinfosComponent} from './buyinghouse/zoneinfos/zoneinfos.component';
import {ZoneInfoComponent} from './buyinghouse/zoneinfos/zone-info/zone-info.component';
import {ZoneInfoListComponent} from './buyinghouse/zoneinfos/zone-info-list/zone-info-list.component';
import { CountryappComponent } from './countryapp/countryapp.component';
import { SalepointfilterComponent } from './salepointfilter/salepointfilter.component';
import {SalepointfolterService} from './salepointfilter/salepointfolter.service';
import { SpmainsComponent } from './spmains/spmains.component';
import {SpmainService} from './spmains/shared/spmain.service';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import { GeofilteringComponent } from './spmains/geofiltering/geofiltering.component';
import { SpmaincontainerComponent } from './spmains/spmaincontainer/spmaincontainer.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomegeoComponent } from './homegeo/homegeo.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SalepointdashboardmapComponent } from './salepointdashboardmap/salepointdashboardmap.component';
import { SalepointsolComponent } from './salepointsol/salepointsol.component';

// import { ToastrModule } from 'ngx-toastr';


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

    CountryappComponent,

    // Map components
    MapComponent,
    ComuniComponent,
    ComuneComponent,
    ComuneListComponent,

    BrandMicrosComponent,
    BrandMicroComponent,
    BrandMicroListComponent,

    ComuneConfigsComponent,
    ComuneConfigComponent,
    ComuneListComponent,
    ComuneConfigListComponent,

    BrandCalculationsComponent,
    BrandCalculationComponent,



    // Buy house
    BuyinghouseComponent,
    PriceinfosComponent,
    PriceInfoComponent,
    PriceInfoListComponent,
    ZoneinfosComponent,
    ZoneInfoComponent,
    ZoneInfoListComponent,
    CountryappComponent,
    SalepointfilterComponent,
    SpmainsComponent,
    GeofilteringComponent,
    SpmaincontainerComponent,
    NavComponent,
    HomegeoComponent,
    SalepointdashboardmapComponent,
    SalepointsolComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot(),
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [SalePointService, OfferService, UserService,
    RoleService, PermissionService, ProductService,
    BrandQuestionService, BrandAnswerService,
    ParameterQuestionService, ParameterAnswerService,
    NationService, RegionService, ProvinceService, ComuneService, CapService, ComuneConfigService,
    BrandCalculationsService, PriceInfoService, SalepointfolterService, SpmainService],

  bootstrap: [AppComponent],
  entryComponents: [SalePointComponent, ProductComponent,
    BrandQuestionComponent, BrandAnswerComponent,
    ParameterQuestionComponent, ParameterAnswerComponent, ComuneComponent,
    ComuneConfigComponent, BrandCalculationComponent, PriceInfoComponent, ZoneInfoComponent, CountryappComponent, SalepointfilterComponent, SpmainsComponent, GeofilteringComponent, SpmaincontainerComponent,
    HomeComponent]
})
export class AppModule {
}
