import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { FormsModule } from '@angular/forms';
import { WishListComponent } from '../wish-list/wish-list.component';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';
import { WishFilterComponent } from '../wish-filter/wish-filter.component'; // <-- Import WishListComponent
import { EventService } from '../../shared/services/EventService';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [
    AddWishFormComponent,
    WishFilterComponent,
    WishListComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css',
})
export class WishComponent {
  constructor(events: EventService) {
    events.listen('removeWish', (wish: any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    });
  }
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Learn Languages', false),
  ];

  filter: (item: WishItem) => boolean = () => true; // Default to show all items
}
