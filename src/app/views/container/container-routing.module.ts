import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../features/order/order.component';
import { BillComponent } from '../features/bill/bill.component';
import { BillDetailComponent } from '../features/bill/bill-detail/bill-detail.component';
import { CompanyComponent } from '../features/company/company.component';
import { CompanyAddComponent } from '../features/company/company-add/company-add.component';
import { CompanyEditComponent } from '../features/company/company-edit/company-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: ContainerComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'order', component: OrderComponent },
      { path: 'bill', component: BillComponent },
      { path: 'bill/bill-detail', component: BillDetailComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'company/add-company', component: CompanyAddComponent },
      { path: 'company/edit-company', component: CompanyEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
