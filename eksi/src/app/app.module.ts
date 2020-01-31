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
import { ProductsPageComponent } from './customer-pages/products-page/products-page.component';

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
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
