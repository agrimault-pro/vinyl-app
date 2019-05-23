import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVinylComponent } from './edit-vinyl.component';

describe('EditVinylComponent', () => {
  let component: EditVinylComponent;
  let fixture: ComponentFixture<EditVinylComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVinylComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVinylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
