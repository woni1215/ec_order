import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from './primeng/primeng.module';
// import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // AngularSvgIconModule.forRoot(),
    // ComponentsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    // AngularSvgIconModule,
    PrimengModule,
    // ComponentsModule
  ]
})
export class SharedModule { }
