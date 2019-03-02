import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationReadComponent } from './inspiration-read.component';

describe('InspirationReadComponent', () => {
  let component: InspirationReadComponent;
  let fixture: ComponentFixture<InspirationReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspirationReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
