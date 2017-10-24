import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrFormComponent } from './toastr-form.component';

describe('ToastrFormComponent', () => {
  let component: ToastrFormComponent;
  let fixture: ComponentFixture<ToastrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
