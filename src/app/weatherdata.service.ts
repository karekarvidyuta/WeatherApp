import { Injectable } from '@angular/core';
import { Http, HttpModule, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root',
})
export class weatherdataService {

  constructor(private http:Http) { }
  //get weatherdata
  getweatherdata(lat:any,lon:any):Observable <any>{

   //const url = 'https://api.openweathermap.org/data/2.5/forecast?q='+ lat +','+ lon +'&&appid=1ffd2cc61ace95f73895ce1b6b273190';
   const url ='https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ lon +'&appid=929e9b8b247fc56f5a7fb7b57172ea56';

   return this.http.get(url).map((response: Response) => {
     const resdata = response.json();
       return resdata;
   });
  }
  //city Name
    getdatabycity(cname:string,cuname:string):Observable <any> {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ cname +','+ cuname +'&&appid=929e9b8b247fc56f5a7fb7b57172ea56';
   console.log(url);
   return this.http.get(url).map((response: Response) => {
       const resdata = response.json();
       return resdata;
     });
 }
  }

