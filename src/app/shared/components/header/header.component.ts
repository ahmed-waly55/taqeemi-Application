import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [FormsModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
isMobile(): boolean {
throw new Error('Method not implemented.');
}
islogin:boolean = true;
currentLan:string = 'ar';



}
