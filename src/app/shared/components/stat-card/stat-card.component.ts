import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [DecimalPipe],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input() title: string = '';
  @Input() value: number = 0;
  @Input() icon: string = '';
  @Input() color: string = '#000'; // اللون الأساسي للأيقونة والبوردر
  @Input() bgColor: string = '#f0f0f0'; // لون خلفية الأيقونة

}
