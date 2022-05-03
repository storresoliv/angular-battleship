import { ObjectValue } from './object-value';

export class Position extends ObjectValue {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    super();

    this.x = x;
    this.y = y;
  }
}
