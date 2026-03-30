import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
    selector: 'app-login',
    imports: [RouterLink, HeaderComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('جاري تسجيل دخول الطالب...', this.loginForm.value);
      // هنا يتم الربط مع Firebase Auth Service
    }
  }
  login(){
  if(isPlatformBrowser(this.platformId)){
    localStorage.setItem("token", "dummy-token");
  }
}
}
