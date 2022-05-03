import { ObjectValue } from './object-value';
import { Position } from './position.model';

export class Shot extends ObjectValue {
  private _position: Position;

  constructor(position: Position) {
    super();

    this._position = position;
  }

  public get position(): Position {
    return this._position;
  }
}
