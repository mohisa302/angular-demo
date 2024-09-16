import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
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
  constructor() {}
  ngOnInit(): void {
    this.updateFilter('0');
  }

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
  listFilter: any = '0';
  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>();
}
