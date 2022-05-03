import { DIRECTION } from '../battleship.constant';
import { CellBoard } from './cell-board.model';
import { ModelFactory } from './model-factory';
import { ObjectValue } from './object-value';
import { Position } from './position.model';
import { Ship } from './ship.model';

type CellMatrix = CellBoard[][];

const getRandomInt = (limit: number) => {
  let random = Math.floor(Math.random() * limit) - 1;

  return random >= 0 ? random : 0;
};

const senses = [DIRECTION.RIGHT, DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP];

const MAX_RETRY = 1000;

export class GameBoard extends ObjectValue {
  private _board: CellMatrix;
  private _dimension: number;
  private _unBuildedShips: Ship[];
  private _ships: Ship[];

  constructor(dimension: number, ships: Ship[]) {
    super();

    this._dimension = dimension;
    this._unBuildedShips = ships;
    this._board = [];
    this._ships = [];

    this.build();
  }

  public get board(): CellMatrix {
    return this._board;
  }

  public get ships(): Ship[] {
    return this._ships;
  }

  private build(): void {
    this._board = this.createGameBoard();
    this.buildShips(this._board);
  }

  private createGameBoard(): CellMatrix {
    let row: CellBoard[];
    let matrix: Array<CellBoard[]> = [];

    for (let x = 0; x < this._dimension; x++) {
      row = [];

      for (let y = 0; y < this._dimension; y++) {
        let position = ModelFactory.createPosition(x, y);
        let cellBoard = ModelFactory.createCellBoard(position);

        row.push(cellBoard);
      }

      matrix.push(row);
    }

    return matrix;
  }

  private buildShips(board: CellMatrix): void {
    const build = (ship: Ship) => {
      let positions = this.createShipPositions(ship.size, board);

      ship.build(positions);

      board = this.insertShipOnBoard(ship, board);

      return ship;
    };

    this._ships = this._unBuildedShips.map((ship) => build(ship));
  }

  private createShipPositions(size: number, board: CellMatrix): Position[] {
    if (size === 1) {
      return [this.createEmptyPosition(board)];
    }

    let positions: Position[] = this.findPositions(size, board);

    return positions;
  }

  private findPositions(
    size: number,
    board: CellMatrix,
    retry = 0
  ): Position[] {
    if (retry === MAX_RETRY)
      throw new Error('can create position for this ship.');

    retry++;

    let startPosition = this.createEmptyPosition(board);
    let positions: Position[] = [startPosition];

    let prevPosition = startPosition;
    let sizeThreshold = size;
    let senseThreshold = senses.length;
    let senseChanges = 0;
    let senseRandom = getRandomInt(senses.length);
    let vectorPosition = 1;
    let done = false;
    let fail = false;
    let sense: DIRECTION;
    let newPosition: Position;

    while (!done) {
      let isEmpty = false;
      sense = senses[senseRandom];
      newPosition = ModelFactory.addPosition(prevPosition, sense);

      if (prevPosition.toString() !== newPosition.toString()) {
        isEmpty = this.isEmptyPosition(newPosition, board);
      }

      if (isEmpty) {
        prevPosition = newPosition;
        positions.push(newPosition);

        vectorPosition++;
      } else {
        positions = [startPosition];
        prevPosition = startPosition;
        vectorPosition = 1;
        senseChanges++;
        senseRandom++;
      }

      if (senseRandom > senseThreshold) {
        senseRandom = 0;
      }

      if (senseChanges === senseThreshold) {
        fail = true;
        done = true;
      }

      if (vectorPosition === sizeThreshold) {
        done = true;
      }
    }

    if (fail) {
      return this.findPositions(size, board, retry);
    }

    return positions;
  }

  private createEmptyPosition(board: CellMatrix): Position {
    let newPosition = this.createRandomPosition();

    if (this.isEmptyPosition(newPosition, board)) return newPosition;

    return this.createEmptyPosition(board);
  }

  private createRandomPosition(): Position {
    let x = getRandomInt(this._dimension);
    let y = getRandomInt(this._dimension);

    return ModelFactory.createPosition(x, y);
  }

  private isEmptyPosition(position: Position, board: CellMatrix): boolean {
    try {
      let cell = board[position.x][position.y];

      let { isShip } = cell;

      return !isShip;
    } catch (error) {
      return false;
    }
  }

  private insertShipOnBoard(ship: Ship, board: CellMatrix): CellMatrix {
    ship.positions.forEach((position) => {
      let cellBoard = board[position.x][position.y];

      cellBoard.setShip();

      board[position.x][position.y] = cellBoard;
    });

    return board;
  }
}
