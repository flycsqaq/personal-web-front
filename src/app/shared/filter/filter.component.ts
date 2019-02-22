import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../../core/models/data/options';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.styl']
})
export class FilterComponent implements OnInit {
  @Input() filters: Option[]
  @Input() name: string
  selectedFilter: any
  constructor() { }

  ngOnInit() {
  }

}
