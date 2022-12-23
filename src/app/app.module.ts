import { LayoutModule } from './components/layout.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderNewComponent } from './views/features/order/order-new/order-new.component';
import { OrderEditComponent } from './views/features/order/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OrderNewComponent,
    OrderEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
