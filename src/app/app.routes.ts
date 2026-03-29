import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"" , redirectTo: "home", pathMatch:"full"},
  {path:"home" ,title: "Home", loadComponent: ()=> import("./layout/landing/landing.component").then(m=>m.LandingComponent)},
  {path:"dashboard" , title: "Dashboard", loadComponent: ()=> import("./layout/dashboard/dashboard.component").then(m=>m.DashboardComponent)},
  {path:"login" ,title: "Login", loadComponent: ()=> import("./features/auth/login/login.component").then(m=>m.LoginComponent)},
  {path:"signup" , title: "Sign Up", loadComponent: ()=> import("./features/auth/sign-up/sign-up.component").then(m=>m.SignUpComponent)},
  {path:"activate" , title: "Activate Code", loadComponent: ()=> import("./features/activate-code/activate-code.component").then(m=>m.ActivateCodeComponent)},
  {path:"**" , title: "Not Found", loadComponent: ()=> import("./layout/not-found/not-found.component").then(m=>m.NotFoundComponent)},

];
