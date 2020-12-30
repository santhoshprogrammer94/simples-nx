import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppSharedModule, MaterialModule } from '@simples/app-shared';

import { CargosComponent } from './cargos.component';
import { FormComponent } from './form/form.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  {
    path: '',
    component: CargosComponent,
    children: [
      { path: 'index', component: IndexComponent, data: { page: 'Todos Cargos', tela: 'administradorIconeCargos' } },
      { path: ':id', component: FormComponent }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    AppSharedModule,
    FlexLayoutModule,
  ],
  declarations: [CargosComponent, FormComponent, IndexComponent],
})
export class CargosModule {}
