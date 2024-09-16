import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // Add RouterModule here
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WishListComponent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    RouterModule, // Import RouterModule for routing
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
