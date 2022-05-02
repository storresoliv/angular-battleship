import { IPosition } from './position.model';

type Direction = 'RIGHT' | 'LEFT' | 'UP' | 'DOWN';

export const createPosition = (refPos: IPosition, direction: Direction): IPosition => {
  let newPos = { x: 0, y: 0 };

  switch (direction) {
    case 'RIGHT':
      newPos = { x: refPos.x + 1, y: refPos.y };
      break;

    case 'LEFT':
      newPos = { x: refPos.x - 1, y: refPos.y };
      break;

    case 'UP':
      newPos = { x: refPos.x, y: refPos.y + 1 };
      break;

    case 'DOWN':
      newPos = { x: refPos.x, y: refPos.y - 1 };
      break;

    default:
      newPos = refPos;
      break;
  }

  return newPos;
};

export class Ship {
  private _hits: number;
  private _positions: IPosition[];
  private _size: number;
  private _isBuilded: boolean;

  constructor(size: number) {
    this._positions = [];
    this._size = size;
    this._hits = 0;
    this._isBuilded = false;
  }

  public get size(): number {
    return this._size;
  }

  public get positions(): IPosition[] {
    return this._positions;
  }

  public get hits(): number {
    return this._hits;
  }

  public get isDestroyed(): boolean {
    return this._hits === this._size;
  }

  public build(startPosition: IPosition, direction: Direction): void {
    if (this._isBuilded) return;

    this._positions.push(startPosition);
    let prevPosition = startPosition;

    for (let index = 1; index < this._size; index++) {
      let newPosition = createPosition(prevPosition, direction);

      this._positions.push(newPosition);

      prevPosition = newPosition;
    }

    this._isBuilded = true;
  }

  public hit(): void {
    this._hits++;
  }
}
