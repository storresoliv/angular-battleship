import { CellBoard } from './cell-board.model';
import { Ship } from './ship.model';

type CellMatrix = CellBoard[][];

export class GameBoard {
  private _board: CellMatrix;
  private _ships: Ship[];

  constructor(board: CellMatrix, ships: Ship[]) {
    this._board = board;
    this._ships = ships;
  }

  public get board(): CellMatrix {
    return this._board;
  }

  public get ships(): Ship[] {
    return this._ships;
  }
}
