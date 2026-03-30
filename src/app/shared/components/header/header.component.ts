import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, Inject, Input, OnInit, PLATFORM_ID, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [FormsModule, RouterLink, NgClass,RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
constructor(@Inject(PLATFORM_ID) private platformId: Object) {
}
islogin:boolean = false;
currentLan:string = 'ar';

@Input({required: true}) col:string = 'col-12';

 ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.islogin = !!localStorage.getItem("token");
    }
  }
logout(){
 if(isPlatformBrowser(this.platformId)){
  localStorage.removeItem("token");
  this.islogin = false;
 }
}
}
