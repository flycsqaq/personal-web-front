import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../core/models/data/options';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.styl']
})
export class FilterComponent implements OnInit {
  @Input() filters: Option[]
  @Input() name: string
  @Output() filterSelect = new EventEmitter<any>()
  selectedFilter: number = 0
  lastFilter: number = 0
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() { 
    if (this.selectedFilter === this.lastFilter) {
      return
    }
    this.lastFilter = this.selectedFilter
    this.filterSelect.emit(this.selectedFilter)
  }
}
