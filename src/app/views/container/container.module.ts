import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/components/layout.module';
import { OrderComponent } from '../features/order/order.component';
import { BillComponent } from '../features/bill/bill.component';
import { BillDetailComponent } from '../features/bill/bill-detail/bill-detail.component';
import { CompanyComponent } from '../features/company/company.component';
import { CompanyAddComponent } from '../features/company/company-add/company-add.component';
import { CompanyEditComponent } from '../features/company/company-edit/company-edit.component';

@NgModule({
  declarations: [
    ContainerComponent,
    OrderComponent,
    BillComponent,
    BillDetailComponent,
    CompanyComponent,
    CompanyAddComponent,
    CompanyEditComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class ContainerModule { }
