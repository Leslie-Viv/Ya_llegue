import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepersonalComponent } from './homepersonal.component';

describe('HomepersonalComponent', () => {
  let component: HomepersonalComponent;
  let fixture: ComponentFixture<HomepersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepersonalComponent]
    });
    fixture = TestBed.createComponent(HomepersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
