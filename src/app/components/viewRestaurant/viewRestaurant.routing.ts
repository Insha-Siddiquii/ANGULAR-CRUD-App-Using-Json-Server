import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ViewRestaurantComponent } from './viewRestaurant.component';
import { EditRestaurantComponent } from '../editRestaurant/editRestaurant.component';


const routes: Routes = [
  { path: '', component: ViewRestaurantComponent },
  {path:'edit/:id', component: EditRestaurantComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);