import { Routes, RouterModule } from '@angular/router';

import { CustomerHomeComponent } from './customer-pages/customer-home-page/home.component';
import { StaffHomeComponent } from './staff-pages/staff-home-page/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ProductsPageComponent } from './staff-pages/products-page/products-page.component';
import { TransactionPageComponent } from './staff-pages/transaction-page/transaction-page.component';

const routes: Routes = [
    { path: 'cushomepage', component: CustomerHomeComponent },
    { path: 'staffhomepage', component: StaffHomeComponent },
    { path: 'loginpage', component: LoginPageComponent },
    { path: 'accountinfopage', component: AccountInfoComponent },
    { path: 'productspage', component: ProductsPageComponent },
    { path: 'transactionpage', component: TransactionPageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);