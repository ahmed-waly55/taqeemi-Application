import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-activate-code',
    imports: [FormsModule],
    templateUrl: './activate-code.component.html',
    styleUrl: './activate-code.component.css'
})
export class ActivateCodeComponent {
activationCode: string = '';
  isActivated: boolean = false;
  isLoading: boolean = false;

  verifyCode() {
    if (this.activationCode.length === 12) {
      this.isLoading = true;
      // محاكاة لعملية التحقق من السيرفر
      setTimeout(() => {
        this.isLoading = false;
        this.isActivated = true;
      }, 1500);
    }
  }
}
