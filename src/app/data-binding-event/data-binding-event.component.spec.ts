import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingEventComponent } from './data-binding-event.component';

describe('DataBindingEventComponent', () => {
  let component: DataBindingEventComponent;
  let fixture: ComponentFixture<DataBindingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
