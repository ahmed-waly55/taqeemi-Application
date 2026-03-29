import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkActive, FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
islogin:boolean = true;
currentLan:string = 'en';

}
