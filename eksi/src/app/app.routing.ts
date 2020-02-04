import { Routes, RouterModule } from '@angular/router';

import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';
import { CustomerLoginPageComponent } from './customer-login-page/customer-login-page.component';
import { StaffLoginPageComponent } from './staff-login-page/staff-login-page.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ProductsPageComponent } from './staff-pages/products-page/products-page.component';
import { TransactionPageComponent } from './staff-pages/transaction-page/transaction-page.component';
import { StartingPageComponent } from './starting-page/starting-page.component';

const routes: Routes = [
    { path: 'cushomepage', component: CustomerHomeComponent },
    { path: 'staffhomepage', component: StaffHomeComponent },
    { path: 'customerloginpage', component: CustomerLoginPageComponent },
    { path: 'staffloginpage', component: StaffLoginPageComponent },
    { path: 'accountinfopage', component: AccountInfoComponent },
    { path: 'productspage', component: ProductsPageComponent },
    { path: 'transactionpage', component: TransactionPageComponent },
    { path: 'startingpage', component: StartingPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);