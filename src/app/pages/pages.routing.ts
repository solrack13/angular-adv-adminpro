import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'}},
      { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'}},
      { path: 'grafica1', component: Graficas1Component, data: { titulo: 'Gráfica #1'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta'}},
      { path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas'}},
      { path: 'rjxs', component: RxjsComponent, data: { titulo: 'Rxjs'}},
    ]
  },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
