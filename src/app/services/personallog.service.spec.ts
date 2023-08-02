import { TestBed } from '@angular/core/testing';

import { PersonallogService } from './personallog.service';

describe('PersonallogService', () => {
  let service: PersonallogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonallogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
