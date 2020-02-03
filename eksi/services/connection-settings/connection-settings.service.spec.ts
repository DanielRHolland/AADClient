import { TestBed } from '@angular/core/testing';

import { ConnectionSettingsService } from './connection-settings.service';

describe('ConnectionSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionSettingsService = TestBed.get(ConnectionSettingsService);
    expect(service).toBeTruthy();
  });
});
