import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoresdispoComponent } from './tutoresdispo.component';

describe('TutoresdispoComponent', () => {
  let component: TutoresdispoComponent;
  let fixture: ComponentFixture<TutoresdispoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TutoresdispoComponent]
    });
    fixture = TestBed.createComponent(TutoresdispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
