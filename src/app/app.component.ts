import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component'; // <-- Import WishListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WishListComponent,
    CommonModule,
    FormsModule,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Learn Languages', false),
  ];

  filter: any = () => {};

  get visibleItem(): WishItem[] {
    return this.items.filter(this.filter);
  }
}
