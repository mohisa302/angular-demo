import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { WishItem } from '../../shared/models/wishItem';
@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css',
})
export class WishListComponent {
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  @Input() wishes: WishItem[] = [];
}
