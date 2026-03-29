import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"" , redirectTo: "home", pathMatch:"full"},
  {path:"home" , loadComponent: ()=> import("./layout/landing/landing.component").then(m=>m.LandingComponent)},
  {path:"dashboard" , loadComponent: ()=> import("./layout/dashboard/dashboard.component").then(m=>m.DashboardComponent)},
  {path:"login" , loadComponent: ()=> import("./features/auth/login/login.component").then(m=>m.LoginComponent)},
  {path:"signup" , loadComponent: ()=> import("./features/auth/sign-up/sign-up.component").then(m=>m.SignUpComponent)},
  {path:"activate" , loadComponent: ()=> import("./features/activate-code/activate-code.component").then(m=>m.ActivateCodeComponent)},
  {path:"**" , loadComponent: ()=> import("./layout/not-found/not-found.component").then(m=>m.NotFoundComponent)},

];
