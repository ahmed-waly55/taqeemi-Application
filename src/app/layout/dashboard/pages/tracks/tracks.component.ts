import { Component, signal } from '@angular/core';
import { RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-tracks',
  imports: [RouterLinkWithHref],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {
activeSubscriptionPath = signal('المرحلة الجامعية');
  selectedLevel = signal('');

  // حالات التحكم في الشاشات
  showPaymentOptions = signal(false);
  showCodeInput = signal(false);
  promoCode = signal('');

  levels = signal([
    { id: 'primary', name: 'المرحلة الابتدائية', color: '#4cc9f0', icon: 'fas fa-pencil-alt' },
    { id: 'prep', name: 'المرحلة الإعدادية', color: '#4895ef', icon: 'fas fa-book' },
    { id: 'secondary', name: 'المرحلة الثانوية', color: '#4361ee', icon: 'fas fa-graduation-cap' },
    { id: 'university', name: 'المرحلة الجامعية', color: '#3f37c9', icon: 'fas fa-university' }
  ]);

  onLevelClick(levelName: string) {
    if (levelName === this.activeSubscriptionPath()) {
      alert('أنت مشترك بالفعل في هذا المسار.');
    } else {
      this.selectedLevel.set(levelName);
      this.showPaymentOptions.set(false); // إخفاء خيارات الدفع لو اختار مستوى جديد
    }
  }

  // عند الضغط على "موافق، الانتقال والدفع" في رسالة التحذير
  openPaymentMethods() {
    this.showPaymentOptions.set(true);
  }

  // دالة تفعيل الكود
  submitCode() {
    if (this.promoCode().length > 5) {
      alert(`تم تفعيل الكود بنجاح للمسار: ${this.selectedLevel()}`);
      this.completeTransaction();
    } else {
      alert('الكود غير صحيح، يرجى التأكد منه.');
    }
  }

  completeTransaction() {
    this.activeSubscriptionPath.set(this.selectedLevel());
    this.selectedLevel.set('');
    this.showPaymentOptions.set(false);
    this.showCodeInput.set(false);
    this.promoCode.set('');
  }
}
