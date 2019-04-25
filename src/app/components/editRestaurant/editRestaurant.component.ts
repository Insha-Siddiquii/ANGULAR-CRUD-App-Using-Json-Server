import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './editRestaurant.component.html',
  styleUrls: ['./editRestaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  list: any = { id: '',name: '' , address: '', neighborhood:'', contact:'', cuisine_type: '',latlng:{ lat: '' , lng: ''},photograph: ''};

  constructor( private activeRoute: ActivatedRoute, private router: Router, private http: HttpClient)  { }

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
    
      console.log("data with respect to id is: "+ res.latlng.lat);
      
      
      
});
  }
  saveList(list){
    let req: any = JSON.parse(JSON.stringify(list));
    console.log("add restaurant data is: "+  req.name);
    this.http.put('http://localhost:3004/restaurants/' + req.id ,req).subscribe((res: any) => {
      console.log("Response  is: " + res.latlng.lat);
      if(res.id){
        this.router.navigate(['restaurant']);
      }
  });
  
    
  }

}
