import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { STATE } from 'src/app/battleship/battleship.constant';
import { ModelsFactory } from 'src/app/battleship/models';
import { GameboardService } from '../services/gameboard.service';

import { GameboardComponent } from './gameboard.component';

describe('GameboardComponent', () => {
  let component: GameboardComponent;
  let fixture: ComponentFixture<GameboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameboardComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    let gameboardService = TestBed.inject(GameboardService);

    let testShip = ModelsFactory.createShip(1);
    let testGameboard = ModelsFactory.createGameBoard(1, [testShip]);

    spyOn(gameboardService, 'getGameboard').and.returnValue(of(testGameboard));
    spyOn(gameboardService, 'getShots').and.returnValue(1);

    fixture = TestBed.createComponent(GameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fire', () => {
    component.fireShot(0, 0);

    let board = component.getBoard();
    let cell = board[0][0];

    expect(cell.state).not.toBe(STATE.HIT);
  });
});
