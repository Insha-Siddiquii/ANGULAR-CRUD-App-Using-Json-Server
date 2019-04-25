import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {
 
 //restaurant=JSON.stringify(data.restaurants);
 list: any;
 

  constructor( private http: HttpClient , public router: Router) {
    
      this.http.get<any>('http://localhost:3004/restaurants')
          .subscribe((res : any[]) => {
            
             this.list = res;
             console.log("json data is: " + this.list);
      });
  

   }
   onViewMore(id:number){
      console.log("id is "+ id);
      this.router.navigate(['view/' + id]);
      


   }

  
}
