import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadresrComponent } from './padresr.component';

describe('PadresrComponent', () => {
  let component: PadresrComponent;
  let fixture: ComponentFixture<PadresrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadresrComponent]
    });
    fixture = TestBed.createComponent(PadresrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
