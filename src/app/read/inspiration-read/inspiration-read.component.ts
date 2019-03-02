import { Component, OnInit, Input } from '@angular/core';
import { Inspiration_GET } from '../../core/models';
import { InspirationService, UserService } from '../../core/services';

@Component({
  selector: 'app-inspiration-read',
  templateUrl: './inspiration-read.component.html',
  styleUrls: ['./inspiration-read.component.styl']
})
export class InspirationReadComponent implements OnInit {
  @Input() inspiration
  ins: Inspiration_GET
  isWrite: boolean = false
  constructor(
    private inspirationService: InspirationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initIns()
  }
  ngOnChanges() {
    this.initIns()
  }
  initIns() {
    this.ins = JSON.parse(JSON.stringify(this.inspiration))
  }
  edit() {
    this.isWrite = true
  }
  put() {
    const { book, title, body } = this.ins
    const ins = {
      book,
      title,
      body
    }
    this.inspirationService.put(this.ins.id, ins)
  }
  cancel() {
    this.isWrite = false
  }
}
