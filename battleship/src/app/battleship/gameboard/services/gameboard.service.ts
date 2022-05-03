import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameBoard, ModelsFactory, Ship } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class GameboardService {
  private _gameboard: BehaviorSubject<GameBoard> = new BehaviorSubject(
    ModelsFactory.createGameBoard(0, [])
  );

  constructor() {}

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
