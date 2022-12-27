import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from '../features/order/order.component';
import { OrderNewComponent } from '../features/order/order-new/order-new.component';
import { OrderEditComponent } from '../features/order/order-edit/order-edit.component';
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
      { path: 'order/order-new', component: OrderNewComponent },
      { path: 'order/order-edit', component: OrderEditComponent },
      { path: 'bill', component: BillComponent },
      { path: 'bill/bill-detail', component: BillDetailComponent },
      // { path: 'bill/bill-detail/:id', component: BillDetailComponent },
      { path: 'company', component: CompanyComponent },
      { path: 'company/add-company', component: CompanyAddComponent },
      // { path: 'company/edit-company', component: CompanyEditComponent },
      { path: 'company/edit-company/:id', component: CompanyEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
