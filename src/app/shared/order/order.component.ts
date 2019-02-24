import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../core/models/data/options';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.styl']
})
export class OrderComponent implements OnInit {
  @Input() orders: Option[]
  @Output() orderSelect = new EventEmitter()
  selectedOrder: string = 'id' 
  lastOrder: string = 'id'
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck() {
    if (this.selectedOrder === this.lastOrder) {
      return
    }
    this.lastOrder = this.selectedOrder
    this.orderSelect.emit(this.selectedOrder)
  }
}
