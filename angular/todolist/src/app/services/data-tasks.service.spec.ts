import { TestBed } from '@angular/core/testing';

import { DataTasksService } from './data-tasks.service';

describe('DataTasksService', () => {
  let service: DataTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
