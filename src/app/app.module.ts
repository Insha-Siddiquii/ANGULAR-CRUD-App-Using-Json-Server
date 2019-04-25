import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AddRestaurantComponent } from './components/addRestaurant/addRestaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    AddRestaurantComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR-API-KEYS-FOR-GOOGLE-MAPS'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
