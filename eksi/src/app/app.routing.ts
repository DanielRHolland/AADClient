import { Routes, RouterModule } from '@angular/router';

import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ProductsPageComponent } from './staff-pages/products-page/products-page.component';
import { TransactionPageComponent } from './staff-pages/transaction-page/transaction-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';
import {StaffMembersPageComponent } from './staff-pages/staff-members-page/staff-members-page.component';

const routes: Routes = [
    { path: '', component: StartingPageComponent },
    { path: 'c/home', component: CustomerHomeComponent },
    { path: 's/home', component: StaffHomeComponent },
    { path: 'c/login', component: LoginPageComponent, data: {isStaff: false}},
    { path: 's/login', component: LoginPageComponent, data: {isStaff: true}},
    { path: 'account', component: AccountInfoComponent },
    { path: 's/products', component: ProductsPageComponent },
    { path: 's/transactions', component: TransactionPageComponent },
    { path: 's/members', component: StaffMembersPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
