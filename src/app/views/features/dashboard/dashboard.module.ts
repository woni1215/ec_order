import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountComponent } from './account/account.component';
import { AccountEditComponent } from './account/account-edit/account-edit.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AccountComponent,
    AccountEditComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
