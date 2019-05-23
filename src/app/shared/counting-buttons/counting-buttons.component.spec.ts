import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingButtonsComponent } from './counting-buttons.component';

describe('CountingButtonsComponent', () => {
  let component: CountingButtonsComponent;
  let fixture: ComponentFixture<CountingButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
