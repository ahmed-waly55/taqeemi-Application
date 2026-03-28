import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
islogin:boolean = false;
currentLan:string = 'en';

}
