import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalrComponent } from './personalr.component';

describe('PersonalrComponent', () => {
  let component: PersonalrComponent;
  let fixture: ComponentFixture<PersonalrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalrComponent]
    });
    fixture = TestBed.createComponent(PersonalrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
