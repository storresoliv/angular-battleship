import { DIRECTION } from '../battleship.constant';
import { CellBoard } from './cell-board.model';
import { GameBoard } from './game-board.model';
import { Position } from './position.model';
import { Ship } from './ship.model';
import { Shot } from './shot.model';

export class ModelFactory {
  public static createPosition(x: number, y: number): Position {
    return new Position(x, y);
  }

  public static createShip(size?: number): Ship {
    return new Ship(size);
  }

  public static createShot(position: Position): Shot {
    return new Shot(position);
  }

  public static createCellBoard(position: Position): CellBoard {
    return new CellBoard(position);
  }

  public static createGameBoard(dimension: number, ships: Ship[]): GameBoard {
    return new GameBoard(dimension, ships);
  }

  public static addPosition(refPos: Position, sense: DIRECTION): Position {
    let newPos: Position;

    switch (sense) {
      case DIRECTION.RIGHT:
        newPos = ModelFactory.createPosition(refPos.x + 1, refPos.y);
        break;

      case DIRECTION.LEFT:
        newPos = ModelFactory.createPosition(refPos.x - 1, refPos.y);
        break;

      case DIRECTION.UP:
        newPos = ModelFactory.createPosition(refPos.x, refPos.y + 1);
        break;

      case DIRECTION.DOWN:
        newPos = ModelFactory.createPosition(refPos.x, refPos.y - 1);
        break;

      default:
        newPos = refPos;
        break;
    }

    return newPos;
  }
}
