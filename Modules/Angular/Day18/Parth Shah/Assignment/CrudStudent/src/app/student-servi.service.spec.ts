import { TestBed } from '@angular/core/testing';

import { StudentServiService } from './student-servi.service';

describe('StudentServiService', () => {
  let service: StudentServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
