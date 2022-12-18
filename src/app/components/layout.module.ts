import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutModule { }
