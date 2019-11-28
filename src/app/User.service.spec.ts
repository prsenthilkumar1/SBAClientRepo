import { TestBed } from '@angular/core/testing';

import { SBAService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ]
  }));

  it('should be created', () => {
    const service: SBAService = TestBed.get(SBAService);
    expect(service).toBeTruthy();
  });
});