import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GameBoard, ModelsFactory, Ship } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class GameboardService {
  private _gameboard: BehaviorSubject<GameBoard> = new BehaviorSubject(
    ModelsFactory.createGameBoard(0, [])
  );

  private _shots = 0;
  private _playAgain: Subject<void> = new Subject();

  constructor() {}

  public playAgain(): void {
    this._playAgain.next();
  }

  public playAgainEvent(): Observable<void> {
    return this._playAgain;
  }

  public getShots(): number {
    return this._shots;
  }

  public setShots(shots: number): void {
    this._shots = shots;
  }

  public get gameboard(): Observable<GameBoard> {
    return this._gameboard;
  }

  createGameboard(dimension: number, ships: Ship[]): GameBoard {
    return ModelsFactory.createGameBoard(dimension, ships);
  }

  loadGameboard(gameboard: GameBoard): void {
    this._gameboard.next(gameboard);
  }
}
