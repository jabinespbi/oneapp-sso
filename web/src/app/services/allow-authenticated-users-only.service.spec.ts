import {TestBed} from '@angular/core/testing';

import {AllowAuthenticatedUsersOnlyService} from './allow-authenticated-users-only.service';

describe('AllowAuthenticatedUsersOnlyService', () => {
  let service: AllowAuthenticatedUsersOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowAuthenticatedUsersOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
