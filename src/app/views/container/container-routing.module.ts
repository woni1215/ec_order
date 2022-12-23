import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../features/order/order.component';
import { OrderNewComponent } from '../features/order/order-new/order-new.component';
import { OrderEditComponent } from '../features/order/order-edit/order-edit.component';
import { BillComponent } from '../features/bill/bill.component';
import { CompanyComponent } from '../features/company/company.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'order', component: OrderComponent },
      { path: 'order/order-new', component: OrderNewComponent },
      { path: 'order/order-edit', component: OrderEditComponent },
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
