import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-up',
    imports: [RouterLink],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      studentCode: ['', [Validators.required]], // اختياري حسب نظامك
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
       ? null : {'mismatch': true};
  }

  onRegister() {
    if (this.registerForm.valid) {
      console.log('جاري إنشاء حساب الطالب الجديد...', this.registerForm.value);
    }
  }
}
