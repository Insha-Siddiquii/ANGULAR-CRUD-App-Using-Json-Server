import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './components/addRestaurant/addRestaurant.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'add', component:  AddRestaurantComponent},
  
  
  { path: 'view/:id', loadChildren:'./components/viewRestaurant/view-restaurant.module#ViewRestaurantModule'},

// otherwise redirect to home
{ path: '', redirectTo: 'restaurant' ,pathMatch:'full' }];


export const routing = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
