import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css',
})
export class WishFilterComponent implements OnInit {
  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  changeFilter(value: any) {
    this.filter.emit(filters[value]);
  }

  listFilter: any = '0';
  @Output() filter = new EventEmitter<any>();
}
