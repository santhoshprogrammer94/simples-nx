import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgMaterialMultilevelMenuModule, ɵb, MultilevelMenuService } from 'ng-material-multilevel-menu';

import { MediaQueryStatusComponent } from './components/media-query-status/media-query-status.component';
import { FooterMobileComponent } from './components/navigation/footer-mobile/footer-mobile.component';
import { HeaderMobileComponent } from './components/navigation/header-mobile/header-mobile.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgMaterialMultilevelMenuModule, // Import here
  ],
  declarations: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
  ],
  exports: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
  ],

  providers: [MultilevelMenuService],

})
export class AppSharedModule {}
