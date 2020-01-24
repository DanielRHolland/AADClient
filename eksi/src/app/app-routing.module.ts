import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
      {path: 'about', component: AboutComponent},
      {path: '', component: HomeComponent},
      {path: 'contact',component: ContactComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'user', component: UserComponent},
      {path: 'history', component: HistoryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
