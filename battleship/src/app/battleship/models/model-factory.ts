import { CellBoard } from './cell-board.model';
import { GameBoard } from './game-board.model';
import { Ship } from './ship.model';
import { Shot } from './shot.model';

export class ModelFactory {
  public static createShip(size: number): Ship {
    return new Ship(size);
  }

  public static createShot(x: number, y: number): Shot {
    return new Shot({ x, y });
  }

  public static createCellBoard(x: number, y: number): CellBoard {
    return new CellBoard({ x, y });
  }

  public static createGameBoard(
    board: CellBoard[][],
    ships: Ship[]
  ): GameBoard {
    return new GameBoard(board, ships);
  }
}
