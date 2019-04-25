import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './viewRestaurant.component.html',
  styleUrls: ['./viewRestaurant.component.css']
})
export class ViewRestaurantComponent implements OnInit  {
  list: any = { id: '',name: '' , address: '', neighborhood:'', contact:'', cuisine_type: '',latlng:{ lat: '' , lng: ''},photograph: ''};
  
  restId: any;
  lat: number = 51.678418;
  lng: number = 7.809007;
 // list:any;
 
  constructor( private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient) {
    
  }
  
  ngOnInit(){
    this.activeRoute.params.subscribe(routeParams => {
      this. getRestId(routeParams.id);
    });
    
    
    

  }
  getRestId (id: any){
    console.log("id in view is: "+ id);
    this.http.get<any>('http://localhost:3004/restaurants/' + id)
    .subscribe((res : any) => {
      this.list = res;
     this.lat = res.latlng.lat;
    this.lng = res.latlng.lng;
      console.log("data with respect to id is: "+ res.latlng.lat);
      
      
      
});
  }
  editRestaurant(){
    //this.router.navigate(['edit/' + this.list.id]);

  }

  

}
