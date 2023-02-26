import {TestBed} from '@angular/core/testing';

import {AllowNotAuthenticatedUsersOnlyService} from './allow-not-authenticated-users-only.service';

describe('DisallowUnauthenticatedUsersService', () => {
  let service: AllowNotAuthenticatedUsersOnlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllowNotAuthenticatedUsersOnlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
