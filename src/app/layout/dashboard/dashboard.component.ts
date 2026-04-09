import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { StatCardComponent } from "../../shared/components/stat-card/stat-card.component";
import { UserRowComponent } from "../../shared/components/user-row/user-row.component";

@Component({
    selector: 'app-dashboard',
    imports: [HeaderComponent, StatCardComponent, UserRowComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



}
