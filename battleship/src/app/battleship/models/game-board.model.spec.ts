import { ModelFactory } from './model-factory';

const normalize = (object: any) => JSON.stringify(object);

describe('Game Board', () => {
  it('should create', () => {
    let gameBoard = ModelFactory.createGameBoard(10, []);

    let { board } = gameBoard;

    let cellQuantity = board.flatMap((cell) => cell).length;

    expect(cellQuantity).toBe(100);
  });

  it('should insert a ship', () => {
    let ship = ModelFactory.createShip(1);
    let gameBoard = ModelFactory.createGameBoard(10, [ship]);
    let [shipPos] = ship.positions;

    let { board } = gameBoard;

    let { isShip } = board[shipPos.x][shipPos.y];

    expect(isShip).toBeTrue();
  });

  it('should insert ships', () => {
    let ship1 = ModelFactory.createShip(1);
    let ship2 = ModelFactory.createShip(2);
    let ship3 = ModelFactory.createShip(3);
    let ship4 = ModelFactory.createShip(4);
    let ship5 = ModelFactory.createShip(5);
    let dimension = 10;

    let gameBoard = ModelFactory.createGameBoard(dimension, [
      ship5,
      ship4,
      ship3,
      ship2,
      ship1,
    ]);

    let {
      ships: [firstShip, secondShip, thirdShip, fourthShip, fifthShip],
    } = gameBoard;

    let { positions: firstPositions } = firstShip;
    let { positions: secondPositions } = secondShip;
    let { positions: thirdPositions } = thirdShip;
    let { positions: fourthPositions } = fourthShip;
    let { positions: fifthPositions } = fifthShip;

    expect(firstPositions.length).toBe(5);
    expect(secondPositions.length).toBe(4);
    expect(thirdPositions.length).toBe(3);
    expect(fourthPositions.length).toBe(2);
    expect(fifthPositions.length).toBe(1);
  });
});
