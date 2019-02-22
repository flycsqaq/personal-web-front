import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBUttonComponent } from './add.component';

describe('AddBUttonComponent', () => {
  let component: AddBUttonComponent;
  let fixture: ComponentFixture<AddBUttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBUttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBUttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
