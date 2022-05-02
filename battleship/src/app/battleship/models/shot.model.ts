import { IPosition } from './position.model';

export class Shot {
  private _position: IPosition;

  constructor(position: IPosition) {
    this._position = position;
  }

  public get position(): IPosition {
    return this._position;
  }
}
