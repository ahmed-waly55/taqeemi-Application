import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-row',
  imports: [NgClass],
  templateUrl: './user-row.component.html',
  styleUrl: './user-row.component.css'
})
export class UserRowComponent {


 @Input() user: any = {
    name: 'ياسين عبدالله',
    email: 'yassin.a@academy.com',
    avatar: '',
    joinDate: '12 يناير 2024',
    lastSeen: 'منذ 15 دقيقة',
    activity: 75,
    isActive: true
  };

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onReset = new EventEmitter<any>();
}
