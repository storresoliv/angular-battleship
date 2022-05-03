import { DIRECTION } from '../battleship.constant';
import { CellBoard } from './cell-board.model';
import { ModelFactory } from './model-factory';
import { IPosition } from './position.model';
import { Ship } from './ship.model';

type CellMatrix = CellBoard[][];

const getRandomInt = (limit: number) => {
  let random = Math.floor(Math.random() * limit) - 1;

  return random >= 0 ? random : 0;
};

const senses = [DIRECTION.RIGHT, DIRECTION.LEFT, DIRECTION.DOWN, DIRECTION.UP];

const normalize = (position: IPosition) => JSON.stringify(position);

export class GameBoard {
  private _board: CellMatrix;
  private _dimension: number;
  private _unBuildedShips: Ship[];
  private _ships: Ship[];

  constructor(dimension: number, ships: Ship[]) {
    this._dimension = dimension;
    this._unBuildedShips = ships;
    this._board = [];
    this._ships = [];

    this.build();
  }

  private build(): void {
    this.createGameBoard();
    this.insertShips();
  }

  private createGameBoard(): void {
    for (let x = 0; x < this._dimension; x++) {
      let row = [];

      for (let y = 0; y < this._dimension; y++) {
        let cellBoard = ModelFactory.createCellBoard(x, y);

        row.push(cellBoard);
      }

      this._board.push(row);
    }
  }

  private insertShips(): void {
    let board = this._board;

    const build = (ship: Ship) => {
      let positions = this.createShipPositions(ship, board);

      ship.build(positions);

      board = this.insertShipOnCell(ship, board);

      return ship;
    };

    this._ships = this._unBuildedShips.map((ship) => build(ship));
  }

  private insertShipOnCell(ship: Ship, board: CellMatrix): CellMatrix {
    ship.positions.forEach((position) => {
      let cellBoard = board[position.x][position.y];

      cellBoard.setShip();
    });

    return board;
  }

  private createShipPositions(ship: Ship, board: CellMatrix): IPosition[] {
    let positions: IPosition[] = [this.createEmptyPosition(board)];

    if (ship.size === 1) {
      return positions;
    }

    positions = this.findPositions(ship, board);

    return positions;
  }

  private findPositions(ship: Ship, board: CellMatrix): IPosition[] {
    let startPosition = this.createEmptyPosition(board);
    let positions: IPosition[] = [startPosition];

    let prevPosition = startPosition;
    let sizeThreshold = ship.size;
    let senseThreshold = 4;
    let senseChanges = 0;
    let senseRandom = getRandomInt(senseThreshold);
    let vectorPosition = 0;
    let done = false;
    let fail = false;
    let sense: DIRECTION;
    let newPosition: IPosition;

    while (!done) {
      let isEmpty = false;
      sense = senses[senseRandom];
      newPosition = ModelFactory.createPosition(prevPosition, sense);

      if (normalize(prevPosition) !== normalize(newPosition)) {
        isEmpty = this.isEmptyPosition(newPosition, board);
      }

      if (isEmpty) {
        prevPosition = newPosition;
        positions.push(newPosition);

        vectorPosition++;
      } else {
        senseChanges++;
        senseRandom++;
        positions = [];

        if (senseRandom > senseThreshold) {
          senseRandom = 0;
        }
      }

      if (senseChanges === senseThreshold - 1) {
        fail = true;
        done = true;
      }

      if (vectorPosition === sizeThreshold - 1) {
        done = true;
      }
    }

    if (fail) {
      return this.findPositions(ship, board);
    }

    if (ship.size !== positions.length) {
      return this.findPositions(ship, board);
    }

    return positions;
  }

  private createEmptyPosition(board: CellMatrix): IPosition {
    let newPosition = this.createRandomPosition();

    if (this.isEmptyPosition(newPosition, board)) return newPosition;

    return this.createEmptyPosition(board);
  }

  private isEmptyPosition(position: IPosition, board: CellMatrix): boolean {
    try {
      let cell = board[position.x][position.y];

      let { isShip } = cell;

      return !isShip;
    } catch (error) {}

    return false;
  }

  private createRandomPosition(): IPosition {
    let x = getRandomInt(this._dimension);
    let y = getRandomInt(this._dimension);

    return {
      x,
      y,
    };
  }

  public get board(): CellMatrix {
    return this._board;
  }

  public get ships(): Ship[] {
    return this._ships;
  }
}
