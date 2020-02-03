import { TestBed } from '@angular/core/testing';

import { AuthoService } from './autho.service';

describe('AuthoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthoService = TestBed.get(AuthoService);
    expect(service).toBeTruthy();
  });
});
