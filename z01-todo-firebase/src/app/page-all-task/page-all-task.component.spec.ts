import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllTaskComponent } from './page-all-task.component';

describe('PageAllTaskComponent', () => {
  let component: PageAllTaskComponent;
  let fixture: ComponentFixture<PageAllTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAllTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
