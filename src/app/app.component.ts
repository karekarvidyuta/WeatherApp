import { Component, OnInit } from '@angular/core';
import { weatherdataService} from './weatherdata.service';
import {myroute} from './route'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Weather app';
   Math: any;
  weatherdata1={
    name:'',
    main:{
      temp:'',
    },
    sys:{
      country:''
    },
    weather:[{description:''}]
  };
  lat:any=72.000;
  lon:any=19.00;
  cname:string="Mumbai";
  cuname:string="India";
  ngOnInit() {
  this.getweatherinfo(this.lat,this.lon);
  this.getcityinfo(this.cname,this.cuname);
}
constructor(private weatherdata:weatherdataService){
    this.Math = Math;
}
onKey(event) {
  this.cname = event.target.value;
 // alert("asa");
   this.getcityinfo(this.cname,this.cuname);
  }
getweatherinfo(lat,lon) {
    this.weatherdata.getweatherdata(lat,lon).subscribe(data => {
       this.weatherdata1=data;
        console.log(data);
       
      });
}

getcityinfo(cname,cuname) {
 
   this.weatherdata.getdatabycity(cname,cuname).subscribe(data => {
     this.weatherdata1=data;
        console.log(data);
       
      });
}
}






