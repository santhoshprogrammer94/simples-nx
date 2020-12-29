import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'websites',
    loadChildren: '../websites/websites.module#WebsitesModule',
  },
  {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
  },

  {
    path: 'goiagba',
    loadChildren: '../dashboard/dashboard.module#DashboardModule',
  },

  {
    path: 'nx',
    loadChildren: () => import('@simples/pages').then((m) => m.NxModule)
  },

  {
    path: 'auxiliares/cargos',
    loadChildren: () => import('@simples/app-auxiliares').then((m) => m.CargosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
