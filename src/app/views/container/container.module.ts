import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/components/layout.module';
import { OrderComponent } from '../features/order/order.component';
import { BillComponent } from '../features/bill/bill.component';
import { CompanyComponent } from '../features/company/company.component';

@NgModule({
  declarations: [
    ContainerComponent,
    OrderComponent,
    BillComponent,
    CompanyComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class ContainerModule { }
