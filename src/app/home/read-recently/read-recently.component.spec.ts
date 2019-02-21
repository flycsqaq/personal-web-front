import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRecentlyComponent } from './read-recently.component';

describe('ReadRecentlyComponent', () => {
  let component: ReadRecentlyComponent;
  let fixture: ComponentFixture<ReadRecentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadRecentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadRecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
