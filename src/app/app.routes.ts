import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"" , redirectTo: "home", pathMatch:"full"},
  {path:"home" , loadComponent: ()=> import("./layout/landing/landing.component").then(m=>m.LandingComponent)},
  {path:"dashboard" , loadComponent: ()=> import("./layout/dashboard/dashboard.component").then(m=>m.DashboardComponent)},
  {path:"**" , redirectTo: "home", pathMatch:"full"},

];
