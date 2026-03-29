import { DecimalPipe } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'
import { RouterLink } from "@angular/router";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
    selector: 'app-landing',
    imports: [DecimalPipe, RouterLink, HeaderComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
studentSatisfaction = 0;
solvedExams = 0;

constructor(@Inject(PLATFORM_ID) private platformId: Object) {

}
  ngOnInit() {
   if (isPlatformBrowser(this.platformId)) {
      this.animateCount('studentSatisfaction', 98, 2000);
      this.animateCount('solvedExams', 2000000, 2500);
    }
  }

  animateCount(property: 'studentSatisfaction' | 'solvedExams', target: number, duration: number) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      this[property] = Math.floor(progress * target);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
}
