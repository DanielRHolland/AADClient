import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { HistoryComponent } from './history/history.component';
import { LoginPageComponent } from './login-page/login-page.component';

import { DemoMaterialModule } from './material-module';
import { CustomerPagesComponent } from './customer-pages/customer-pages.component';
import { StaffPagesComponent } from './staff-pages/staff-pages.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    StaffHomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    UserComponent,
    HistoryComponent,
    LoginPageComponent,
    CustomerPagesComponent,
    StaffPagesComponent,
    AccountInfoComponent,
    ProductsService
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ ProductsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
