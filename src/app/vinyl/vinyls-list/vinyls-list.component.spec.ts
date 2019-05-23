import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylsListComponent } from './vinyls-list.component';

describe('VinylsListComponent', () => {
  let component: VinylsListComponent;
  let fixture: ComponentFixture<VinylsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
