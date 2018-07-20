import { RouterModule, Routes } from '@angular/router';
//import { CurrentComponent } from './current/current.component';
//import { ForcastComponent } from './forcast/forcast.component';
//import { HelloComponent } from './hello.component';

const appRoutes: Routes = [
 /* { path: '', component: CurrentComponent },
  { path: 'forcast',      component: ForcastComponent },
  
  //{ path: '**', component: HelloComponent }*/
];

export const myroute=RouterModule.forRoot(appRoutes);

