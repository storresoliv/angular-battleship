import { DIRECTION } from '../battleship.constant';
import { CellBoard } from './cell-board.model';
import { GameBoard } from './game-board.model';
import { IPosition } from './position.model';
import { Ship } from './ship.model';
import { Shot } from './shot.model';

export class ModelFactory {
  public static createShip(size?: number): Ship {
    return new Ship(size);
  }

  public static createShot(x: number, y: number): Shot {
    return new Shot({ x, y });
  }

  public static createCellBoard(x: number, y: number): CellBoard {
    return new CellBoard({ x, y });
  }

  public static createGameBoard(dimension: number, ships: Ship[]): GameBoard {
    return new GameBoard(dimension, ships);
  }

  public static createPosition(refPos: IPosition, sense: DIRECTION): IPosition {
    let newPos: IPosition;

    switch (sense) {
      case DIRECTION.RIGHT:
        newPos = { x: refPos.x + 1, y: refPos.y };
        break;

      case DIRECTION.LEFT:
        newPos = { x: refPos.x - 1, y: refPos.y };
        break;

      case DIRECTION.UP:
        newPos = { x: refPos.x, y: refPos.y + 1 };
        break;

      case DIRECTION.DOWN:
        newPos = { x: refPos.x, y: refPos.y - 1 };
        break;

      default:
        newPos = refPos;
        break;
    }

    return newPos;
  }
}
