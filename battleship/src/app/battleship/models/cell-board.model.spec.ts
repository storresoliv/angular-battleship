import { ModelFactory } from './model-factory';

const normalize = (object: any) => JSON.stringify(object);

describe('Cell Board', () => {
  it('should create', () => {
    let cellBoard = ModelFactory.createCellBoard(0, 0);

    let expectedPos = { x: 0, y: 0 };

    let { position } = cellBoard;

    expect(cellBoard).toBeTruthy();
    expect(normalize(position)).toBe(normalize(expectedPos));
  });

  it('should hit', () => {
    let cellBoard = ModelFactory.createCellBoard(0, 0);

    cellBoard.setState('hit');

    let { state } = cellBoard;

    expect(state).toBe('hit');
  });
});
