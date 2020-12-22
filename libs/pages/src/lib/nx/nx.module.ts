import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NxRoutingModule } from './nx-routing.module';
import { NxComponent } from './nx.component';

@NgModule({
  imports: [CommonModule, NxRoutingModule],
  declarations: [NxComponent],
})
export class NxModule {}
