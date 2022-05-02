import { IPosition } from './position.model';

export class Ship {
  private _hits: number;
  private _positions: IPosition[];
  private _size: number;

  constructor(size = 0) {
    this._positions = [];
    this._size = size;
    this._hits = 0;
  }

  public get size(): number {
    return this._size ? this._size : this._positions.length;
  }

  public get positions(): IPosition[] {
    return this._positions;
  }

  public get hits(): number {
    return this._hits;
  }

  public get isDestroyed(): boolean {
    return this._hits === this.size;
  }

  public build(positions: IPosition[]) {
    if (this._size > 0 && this._size !== positions.length) return;
    if (this._positions.length > 0) return;

    this._positions = positions;
  }

  public hit(): void {
    this._hits++;
  }
}
