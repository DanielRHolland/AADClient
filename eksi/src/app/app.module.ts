import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';
import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';

import { LoginPageComponent } from './login-page/login-page.component';

import {StaffMembersPageComponent } from './staff-pages/staff-members-page/staff-members-page.component';
import {AddStaffMemberModalComponent } from './staff-pages/staff-members-page/add-staff-member-modal/add-staff-member-modal.component';
import { ScanModalComponent } from './customer-pages/customer-home-page/scan-modal/scan-modal.component';
import { ManualModalComponent } from './customer-pages/customer-home-page/manual-modal/manual-modal.component';
import { CheckoutModalComponent } from './customer-pages/customer-home-page/checkout-modal/checkout-modal.component';

import { DemoMaterialModule } from './material-module';
import { AddProductModalComponent } from './staff-pages/products-page/add-product-modal/add-product-modal.component';
import { AddTransactionModalComponent } from './staff-pages/transaction-page/add-transaction-modal/add-transaction-modal.component';

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
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BarcodeReaderComponent } from './barcode-reader/barcode-reader.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { FromToDialogComponent } from './from-to-dialog/from-to-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    StaffHomeComponent,
    LoginPageComponent,
    StaffMembersPageComponent,
    AccountInfoComponent,
    ProductsPageComponent,
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent,
    AddStaffMemberModalComponent,
    AddProductModalComponent,
    TransactionPageComponent,
    AddTransactionModalComponent,
    StartingPageComponent,
    ToolbarComponent,
    BarcodeReaderComponent,
    SearchboxComponent,
    ConfirmDialogComponent,
    PurchaseOrderComponent,
    FromToDialogComponent,
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
  entryComponents: [
    ScanModalComponent,
    ManualModalComponent,
    CheckoutModalComponent,
    AddProductModalComponent,
    AddTransactionModalComponent,
    AddStaffMemberModalComponent,
    ConfirmDialogComponent,
  FromToDialogComponent ]
})

export class AppModule { }
