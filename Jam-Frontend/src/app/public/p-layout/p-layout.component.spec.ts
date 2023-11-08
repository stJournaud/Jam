import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PLayoutComponent } from './p-layout.component';

describe('PLayoutComponent', () => {
  let component: PLayoutComponent;
  let fixture: ComponentFixture<PLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PLayoutComponent]
    });
    fixture = TestBed.createComponent(PLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
