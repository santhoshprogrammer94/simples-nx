import 'hammerjs';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCoreModule } from '@simples/app-core';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';
import { AppStoreModule } from '@simples/app-store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';

// import { FooterMobileComponent } from './navigation/footer-mobile/footer-mobile.component';
// import { HeaderMobileComponent } from './navigation/header-mobile/header-mobile.component';
// import { SidenavComponent } from './navigation/sidenav/sidenav.component';

// import { AppSharedModule, MaterialModule } from '@simples/app-shared';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    // HeaderMobileComponent,
    // FooterMobileComponent,
    // SidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppCoreModule,
    AppRoutingModule,
    MaterialModule,
    AppSharedModule.forRoot(environment),
    AppStoreModule,
  ],
  providers: [
    { provide: 'environment', useValue: environment },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
