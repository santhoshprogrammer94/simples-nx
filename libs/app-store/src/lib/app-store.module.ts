import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../../../apps/simples-app/src/environments/environment';
import { metaReducers, reducers } from './';
import { entityConfig } from './entity-metadata';
import { HydrationEffects } from './hydration/hydration.effects';
import { RouterEffects } from './router/router.effects';
import { SettingsEffects } from './settings/settings.effects';

const RouterStateMinimal = 1;

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([HydrationEffects, RouterEffects, SettingsEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterStateMinimal }),
    EntityDataModule.forRoot(entityConfig),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({
          name: '2020 Estoques',
          maxAge: 26,
        }),
  ],
})
export class AppStoreModule {}
