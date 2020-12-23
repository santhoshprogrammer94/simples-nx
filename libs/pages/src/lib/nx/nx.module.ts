import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';

import { NxRoutingModule } from './nx-routing.module';
import { NxComponent } from './nx.component';

@NgModule({
  imports: [
    CommonModule,
    NxRoutingModule,
    MaterialModule,
    AppSharedModule,
    FlexLayoutModule,
  ],
  declarations: [NxComponent],
})
export class NxModule {}
