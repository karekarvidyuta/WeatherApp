import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { HelloComponent } from './hello.component';
import { weatherdataService } from './weatherdata.service';
import {Http, HttpModule} from '@angular/http';
//import { HeaderComponent } from './header/header.component';
//import { CurrentComponent } from './current/current.component';
//import { HeaderComponent } from './header/header.component';
//import { ProductComponent } from './product/product.component';

@NgModule({

  imports:      [ BrowserModule, FormsModule ,HttpModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
  
})
export class AppModule { }
