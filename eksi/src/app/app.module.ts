import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';

import { ProductsComponent } from './products/products.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyModalComponent } from './customer-pages/customer-home-page/my-modal/my-modal.component';
import { ScanModalComponent } from './customer-pages/customer-home-page/scan-modal/scan-modal.component';
import { ManualModalComponent } from './customer-pages/customer-home-page/manual-modal/manual-modal.component';
import { CheckoutModalComponent } from './customer-pages/customer-home-page/checkout-modal/checkout-modal.component'

import { DemoMaterialModule } from './material-module';
import { CustomerPagesComponent } from './customer-pages/customer-pages.component';
import { StaffPagesComponent } from './staff-pages/staff-pages.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from './services/products.service';
import { ProductsPageComponent } from './staff-pages/products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    StaffHomeComponent,
    ProductsComponent,
    LoginPageComponent,
    CustomerPagesComponent,
    StaffPagesComponent,
    AccountInfoComponent,
    ProductsPageComponent,
    MyModalComponent,
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ ProductsService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ MyModalComponent,
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent ]
})

export class AppModule { }
