import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  imports: [NgClass],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
// بيانات الطلاب المرتبة
  students = signal([
    { id: 1, name: 'أحمد محمد', points: 2850, level: 'جامعي', avatar: '👨‍💻', trend: 'up' },
    { id: 2, name: 'سارة محمود', points: 2710, level: 'جامعي', avatar: '👩‍🏫', trend: 'up' },
    { id: 3, name: 'ياسين علي', points: 2500, level: 'ثانوي', avatar: '🧑‍🎓', trend: 'down' },
    { id: 4, name: 'ليلى حسن', points: 2350, level: 'جامعي', avatar: '👩‍🔬', trend: 'same' },
    { id: 5, name: 'عمر خالد', points: 2180, level: 'إعدادي', avatar: '👨‍🎨', trend: 'up' },
    { id: 6, name: 'مريم يوسف', points: 2050, level: 'ثانوي', avatar: '👩‍💻', trend: 'down' }
  ]);

  // استخراج الثلاثة الأوائل
  topThree = computed(() => this.students().slice(0, 3));

  // دالة لحساب فرق النقاط عن المتصدر
  getDiffWithTop(points: number): number {
    return this.students()[0].points - points;
  }
}
