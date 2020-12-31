import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { NgxMaskModule } from 'ngx-mask';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DataTableComponent } from './components/data-table/data-table.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MediaQueryStatusComponent } from './components/media-query-status/media-query-status.component';
import { FooterMobileComponent } from './components/navigation/footer-mobile/footer-mobile.component';
import { HeaderMobileComponent } from './components/navigation/header-mobile/header-mobile.component';
import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { CrudDlgApiComponent } from './heranca/crud-dlg-api/crud-dlg-api.component';
import { FormDlgApiComponent } from './heranca/crud-dlg-api/form/form.component';
import { IndexDlgApiComponent } from './heranca/crud-dlg-api/index/index.component';
import { MaterialModule } from './material.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    NgMaterialMultilevelMenuModule, // Import here
    PerfectScrollbarModule,
    NgxMatSelectSearchModule,

    CdkTableModule,
    CdkTreeModule,
    DragDropModule,

    NgxMaskModule.forRoot(),
  ],
  declarations: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
    DataTableComponent,

    CrudDlgApiComponent,
    IndexDlgApiComponent,
    FormDlgApiComponent,
  ],
  exports: [
    FooterMobileComponent,
    HeaderMobileComponent,
    SidenavComponent,
    MediaQueryStatusComponent,
    LoaderComponent,
    DataTableComponent,

    CrudDlgApiComponent,
    IndexDlgApiComponent,
    FormDlgApiComponent,
  ],

  providers: [
    MultilevelMenuService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AppSharedModule {
  public static forRoot(
    environment: any
  ): ModuleWithProviders<AppSharedModule> {
    return {
      ngModule: AppSharedModule,
      providers: [
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule?: AppSharedModule
  ) {
    // if (parentModule) {
    //   throw new Error(
    //     'AppSharedModule já está carregada. Import it in the AppModule only'
    //   );
    // }
  }
}
