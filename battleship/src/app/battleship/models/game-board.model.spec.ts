import { ModelsFactory } from './models.factory';

describe('Game Board', () => {
  it('should create', () => {
    let gameBoard = ModelsFactory.createGameBoard(10, []);

    let { board } = gameBoard;

    let cellQuantity = board.flatMap((cell) => cell).length;

    expect(cellQuantity).toBe(100);
  });

  it('should insert a ship', () => {
    let ship = ModelsFactory.createShip(1);
    let gameBoard = ModelsFactory.createGameBoard(10, [ship]);
    let [shipPos] = ship.positions;

    let { board } = gameBoard;

    let { isShip } = board[shipPos.x][shipPos.y];

    expect(isShip).toBeTrue();
  });

  it('should insert ships', () => {
    let ship1 = ModelsFactory.createShip(1);
    let ship2 = ModelsFactory.createShip(2);
    let ship3 = ModelsFactory.createShip(3);
    let ship4 = ModelsFactory.createShip(4);
    let ship5 = ModelsFactory.createShip(5);

    let dimension = 10;

    let gameBoard = ModelsFactory.createGameBoard(dimension, [
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
