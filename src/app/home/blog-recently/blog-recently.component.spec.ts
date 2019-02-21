import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRecentlyComponent } from './blog-recently.component';

describe('BlogRecentlyComponent', () => {
  let component: BlogRecentlyComponent;
  let fixture: ComponentFixture<BlogRecentlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRecentlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRecentlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
