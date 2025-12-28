import { TestBed } from '@angular/core/testing';

import * as membersService from './members-service';

describe('MembersService', () => {
  let service: membersService.MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(membersService.MembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
