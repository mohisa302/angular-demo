import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { EventService } from '../../shared/services/EventService';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css',
})
export class WishListItemComponent {
  @Input() wish!: WishItem;
  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.fullfilled ? ['strikeout', 'text-muted'] : '';
    return { 'strikeout text-muted': this.wish.isComplete };
  }

  constructor(private events: EventService) {}

  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    // this.fullfilled = !this.fullfilled;
    // this.fullfilledChange.emit(this.fullfilled);
  }
}
