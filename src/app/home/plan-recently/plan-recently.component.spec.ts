import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRecentlyComponent } from './plan-recently.component';

describe('PlanRecentlyComponent', () => {
  let component: PlanRecentlyComponent;
  let fixture: ComponentFixture<PlanRecentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRecentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
