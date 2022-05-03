import { STATE } from '../battleship.constant';
import { ObjectValue } from './object-value';
import { Position } from './position.model';

export class CellBoard extends ObjectValue {
  private _position: Position;
  private _state: STATE;
  private _isShip: boolean;

  constructor(position: Position) {
    super();

    this._position = position;
    this._state = STATE.CLEAN;
    this._isShip = false;
  }

  public get isShip(): boolean {
    return this._isShip;
  }

  public get state(): STATE {
    return this._state;
  }

  public get position(): Position {
    return this._position;
  }

  public setState(newState: STATE): void {
    this._state = newState;
  }

  public setShip(): void {
    this._isShip = true;
  }
}
