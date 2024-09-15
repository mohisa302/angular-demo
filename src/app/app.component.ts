import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component'; // <-- Import WishListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    WishListComponent,
    CommonModule,
    FormsModule,
    AddWishFormComponent,
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

  filters = [
    (item: WishItem) => item,
    (item: WishItem) => !item.isComplete,
    (item: WishItem) => item.isComplete,
  ];

  get visibleItem(): WishItem[] {
    return this.items.filter(this.filters[this.listFilter]);
  }

  listFilter: any = '0';
  title = 'angular-demo';
}
