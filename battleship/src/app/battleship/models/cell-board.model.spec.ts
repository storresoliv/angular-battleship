import { STATE } from '../battleship.constant';
import { ModelFactory } from './model-factory';

describe('Cell Board', () => {
  it('should create', () => {
    let position = ModelFactory.createPosition(0, 0);
    let cellBoard = ModelFactory.createCellBoard(position);

    let expectedPos = { x: 0, y: 0 };

    let { position: cellPosition } = cellBoard;

    expect(cellBoard).toBeTruthy();
    expect(cellPosition.toString()).toBe(JSON.stringify(expectedPos));
  });

  it('should hit', () => {
    let position = ModelFactory.createPosition(0, 0);
    let cellBoard = ModelFactory.createCellBoard(position);

    cellBoard.setState(STATE.HIT);

    let { state } = cellBoard;

    expect(state).toBe(STATE.HIT);
  });
});
