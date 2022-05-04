import { TestBed } from '@angular/core/testing';

import { GameboardService } from './gameboard.service';

describe('GameboardService', () => {
  let service: GameboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should play again', (done) => {
    service.playAgainEvent().subscribe(() => {
      expect(service).toBeTruthy();
      done();
    });

    service.playAgain();
  });

  it('should get shots', () => {
    service.setShots(1);

    expect(service.getShots()).toBe(1);
  });

  it('should create gameboard', () => {
    let gameboard = service.createGameboard(1, [])

    expect(gameboard).toBeTruthy();
  });

  it('should load gameboard', (done) => {
    service.getGameboard().subscribe((board) => {
      expect(board).toBeTruthy();
      done();
    });

    let gameboard = service.createGameboard(1, [])

    service.loadGameboard(gameboard);
  });
});
