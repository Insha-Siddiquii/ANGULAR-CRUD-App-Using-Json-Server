import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRestaurantComponent } from './viewRestaurant.component';
import { routing } from './viewRestaurant.routing';
import { EditRestaurantComponent } from '../editRestaurant/editRestaurant.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewRestaurantComponent,
  EditRestaurantComponent],
  imports: [
    routing,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR-API-KEY-FOR-GOOGLE-MAPS'
    })
  ]

  
})
export class ViewRestaurantModule { }
