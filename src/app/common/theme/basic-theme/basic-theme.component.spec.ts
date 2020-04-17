import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicThemeComponent } from './basic-theme.component';

describe('BasicThemeComponent', () => {
  let component: BasicThemeComponent;
  let fixture: ComponentFixture<BasicThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
