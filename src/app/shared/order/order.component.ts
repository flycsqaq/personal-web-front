import { Component, OnInit, Input } from '@angular/core';
import { Option } from '../../core/models/data/options';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.styl']
})
export class OrderComponent implements OnInit {
  @Input() orders: Option[]
  selectedOrder: any
  constructor() { }

  ngOnInit() {
  }

}
