import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-rewards',
  imports: [CommonModule],
  templateUrl: './rewards.component.html',
  styleUrl: './rewards.component.css'
})
export class RewardsComponent {
// رصيد الطالب الحالي
  userPoints = signal(2850);

  // قائمة الهدايا المتاحة
  rewards = signal([
    { id: 1, title: 'كارت شحن 50 جنيه', points: 1000, icon: 'fas fa-mobile-alt', color: '#4cc9f0', type: 'digital' },
    { id: 2, title: 'خصم 50% على اشتراك الشهر القادم', points: 1500, icon: 'fas fa-percentage', color: '#4895ef', type: 'discount' },
    { id: 3, title: 'تيشيرت منصة تقييمي', points: 3000, icon: 'fas fa-tshirt', color: '#4361ee', type: 'physical' },
    { id: 4, title: 'كتاب البرمجة للمبتدئين', points: 2500, icon: 'fas fa-book-open', color: '#3f37c9', type: 'physical' },
    { id: 5, title: 'ساعة ذكية (Smart Watch)', points: 10000, icon: 'fas fa-stopwatch', color: '#480ca8', type: 'physical' },
    { id: 6, title: 'قسيمة شراء من نون بقيمة 200ج', points: 4000, icon: 'fas fa-shopping-bag', color: '#f72585', type: 'digital' }
  ]);

  redeemReward(reward: any) {
    if (this.userPoints() >= reward.points) {
      if (confirm(`هل أنت متأكد من استبدال ${reward.points} نقطة بـ ${reward.title}؟`)) {
        this.userPoints.update(p => p - reward.points);
        alert('تم الاستبدال بنجاح! سيتم التواصل معك لتسليم الهدية.');
      }
    } else {
      alert('عذراً، رصيدك من النقاط لا يكفي لهذه الهدية.');
    }
  }
}
