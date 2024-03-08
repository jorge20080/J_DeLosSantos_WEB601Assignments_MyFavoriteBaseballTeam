import { TestBed } from '@angular/core/testing';

import { FavoriteBaseballTeamService } from './favorite-baseball-team.service';

describe('FavoriteBaseballTeamService', () => {
  let service: FavoriteBaseballTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteBaseballTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
