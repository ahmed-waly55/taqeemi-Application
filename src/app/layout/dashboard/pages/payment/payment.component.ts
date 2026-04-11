import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
// بيانات المسار المختار (يتم استلامها عادة عبر Navigation)
  selectedPath = signal({
    name: 'المرحلة الثانوية',
    price: 150,
    currency: 'جنية'
  });

  paymentMethod = signal<'card' | 'code' | null>(null);
  promoCode = signal('');
  isProcessing = signal(false);

  setPaymentMethod(method: 'card' | 'code') {
    this.paymentMethod.set(method);
  }

  processPayment() {
    this.isProcessing.set(true);
    // محاكاة عملية الدفع
    setTimeout(() => {
      this.isProcessing.set(false);
      alert('تمت عملية الدفع بنجاح! مبروك اشتراكك الجديد.');
    }, 2000);
  }

  redeemCode() {
    if (this.promoCode().length === 12) {
      this.processPayment();
    } else {
      alert('يرجى إدخال كود صحيح مكون من 12 رقم');
    }
  }
}
