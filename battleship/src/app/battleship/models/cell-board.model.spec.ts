import { STATE } from '../battleship.constant';
import { ModelsFactory } from './models.factory';

describe('Cell Board', () => {
  it('should create', () => {
    let position = ModelsFactory.createPosition(0, 0);
    let cellBoard = ModelsFactory.createCellBoard(position);

    let expectedPos = { x: 0, y: 0 };

    let { position: cellPosition } = cellBoard;

    expect(cellBoard).toBeTruthy();
    expect(cellPosition.toString()).toBe(JSON.stringify(expectedPos));
  });

  it('should hit', () => {
    let position = ModelsFactory.createPosition(0, 0);
    let cellBoard = ModelsFactory.createCellBoard(position);

    cellBoard.setState(STATE.HIT);

    let { state } = cellBoard;

    expect(state).toBe(STATE.HIT);
  });
});
