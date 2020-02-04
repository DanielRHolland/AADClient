import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';

import { ProductsComponent } from './products/products.component';
import { CustomerLoginPageComponent } from './customer-login-page/customer-login-page.component';
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';


import { MyModalComponent } from './customer-pages/customer-home-page/my-modal/my-modal.component';
import { ScanModalComponent } from './customer-pages/customer-home-page/scan-modal/scan-modal.component';
import { ManualModalComponent } from './customer-pages/customer-home-page/manual-modal/manual-modal.component';
import { CheckoutModalComponent } from './customer-pages/customer-home-page/checkout-modal/checkout-modal.component';

import { DemoMaterialModule } from './material-module';
import { CustomerPagesComponent } from './customer-pages/customer-pages.component';
import { StaffPagesComponent } from './staff-pages/staff-pages.component';
import { AddProductModalComponent } from './staff-pages/products-page/add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from './staff-pages/products-page/edit-product-modal/edit-product-modal.component';
import { AddTransactionModalComponent } from './staff-pages/transaction-page/add-transaction-modal/add-transaction-modal.component';
import { EditTransactionModalComponent } from './staff-pages/transaction-page/edit-transaction-modal/edit-transaction-modal.component';
import { DeleteTransactionModalComponent } from './staff-pages/transaction-page/delete-transaction-modal/delete-transaction-modal.component';
import { DeleteProductModalComponent } from './staff-pages/products-page/delete-product-modal/delete-product-modal.component';

import { AccountInfoComponent } from './account-info/account-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductsService } from './services/products/products.service';
import { TransactionsService } from './services/transactions/transactions.service';
import { ConnectionSettingsService } from './services/connection-settings/connection-settings.service';
import { AuthoService } from './services/autho/autho.service';
import { StaffService } from './services/staff/staff.service';

import { ProductsPageComponent } from './staff-pages/products-page/products-page.component';
import { TransactionPageComponent } from './staff-pages/transaction-page/transaction-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    StaffHomeComponent,
    ProductsComponent,
    CustomerLoginPageComponent,
    StaffLoginPageComponent,
    CustomerPagesComponent,
    StaffPagesComponent,
    AccountInfoComponent,
    ProductsPageComponent,
    MyModalComponent,
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent,
    AddProductModalComponent,
    TransactionPageComponent,
    AddTransactionModalComponent,
    EditProductModalComponent,
    DeleteProductModalComponent,
    EditTransactionModalComponent,
    DeleteTransactionModalComponent,
    StartingPageComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [ ProductsService,
     TransactionsService,
     ConnectionSettingsService,
     AuthoService,
    StaffService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ MyModalComponent,
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent,
    AddProductModalComponent,
    AddTransactionModalComponent,
    EditProductModalComponent,
    DeleteProductModalComponent,
    EditTransactionModalComponent,
    DeleteTransactionModalComponent ]
})

export class AppModule { }
