import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppgisComponent} from './appgis.component';
import {MapfilterComponent} from './mapfilter/mapfilter.component';
import {RouterModule} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MapsidebarComponent} from './mapsidebar/mapsidebar.component';

// import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    // AppgisComponent,
    // MapfilterComponent,
    // AnagrafieComponent,
    // ToolbarComponent,
    // MapsidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class AppgisModule {
}
