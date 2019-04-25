import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './addRestaurant.component.html',
  styleUrls: ['./addRestaurant.component.css']
})
export class AddRestaurantComponent  {
  restId: any;
  
  list: any = {name: '' , address: '', neighborhood:'', contact:'', cuisine_type: '',latlng:{ lat: '' , lng: ''},photograph: ''};
  /*name:any;
  address:any;
  neighborhood:any;
  contact:any;
  cuisine_type:any;
  lat:any;
  lng:any;*/


  constructor(private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient) { }
  saveList(list){
    let req: any = JSON.parse(JSON.stringify(list));
    console.log("add restaurant data is: "+  req.name);
    this.http.post('http://localhost:3004/restaurants',req).subscribe((res: any) => {
      console.log("Response  is: " + res.latlng.lat);
      if(res.id){
        this.router.navigate(['restaurant']);
      }
  });
    
  }
  
}
