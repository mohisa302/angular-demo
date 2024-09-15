import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css',
})
export class AddWishFormComponent {
  newWishText = '';
  @Output() addWish = new EventEmitter<WishItem>();

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
