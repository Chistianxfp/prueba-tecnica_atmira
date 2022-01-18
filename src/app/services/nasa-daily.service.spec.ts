import { TestBed } from '@angular/core/testing';

import { NasaDailyService } from './nasa-daily.service';

describe('NasaDailyService', () => {
  let service: NasaDailyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaDailyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
