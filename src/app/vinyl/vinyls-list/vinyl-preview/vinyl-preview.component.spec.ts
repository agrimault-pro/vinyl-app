import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylPreviewComponent } from './vinyl-preview.component';

describe('VinylPreviewComponent', () => {
  let component: VinylPreviewComponent;
  let fixture: ComponentFixture<VinylPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinylPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
