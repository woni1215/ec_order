import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../features/order/order.component';
import { BillComponent } from '../features/bill/bill.component';
import { CompanyComponent } from '../features/company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'order', component: OrderComponent },
      { path: 'bill', component: BillComponent },
      { path: 'company', component: CompanyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
