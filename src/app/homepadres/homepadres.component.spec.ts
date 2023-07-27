import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepadresComponent } from './homepadres.component';

describe('HomepadresComponent', () => {
  let component: HomepadresComponent;
  let fixture: ComponentFixture<HomepadresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepadresComponent]
    });
    fixture = TestBed.createComponent(HomepadresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
