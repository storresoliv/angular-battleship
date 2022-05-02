import { IPosition } from './position.model';

type State = 'clean' | 'hit' | 'destroy' | 'fail';

export class CellBoard {
  private _position: IPosition;
  private _state: State;

  constructor(position: IPosition) {
    this._position = position;
    this._state = 'clean';
  }

  public get state(): State {
    return this._state;
  }

  public get position(): IPosition {
    return this._position;
  }

  public setState(newState: State): void {
    this._state = newState;
  }
}
