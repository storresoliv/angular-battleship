import { ModelFactory } from './model-factory';

describe('Ship', () => {
  it('should create', () => {
    let ship = ModelFactory.createShip();

    expect(ship).toBeTruthy();
  });

  it('should size be 4', () => {
    let ship = ModelFactory.createShip();

    ship.build([
      ModelFactory.createPosition(0, 0),
      ModelFactory.createPosition(1, 0),
      ModelFactory.createPosition(2, 0),
      ModelFactory.createPosition(3, 0),
    ]);

    let { size } = ship;

    expect(size).toBe(4);
  });

  it('should build', () => {
    let ship = ModelFactory.createShip();

    ship.build([
      ModelFactory.createPosition(0, 0),
      ModelFactory.createPosition(1, 0),
      ModelFactory.createPosition(2, 0),
    ]);

    let {
      positions: [, , thirdPos],
    } = ship;

    expect(thirdPos.toString()).toBe(JSON.stringify({ x: 2, y: 0 }));
  });

  it('should not re-build', () => {
    let ship = ModelFactory.createShip();

    ship.build([
      ModelFactory.createPosition(0, 0),
      ModelFactory.createPosition(1, 0),
      ModelFactory.createPosition(2, 0),
    ]);

    ship.build([
      ModelFactory.createPosition(0, 1),
      ModelFactory.createPosition(1, 1),
      ModelFactory.createPosition(2, 1),
    ]);

    let {
      positions: [, secondPos],
    } = ship;

    expect(secondPos.toString()).toBe(JSON.stringify({ x: 1, y: 0 }));
  });

  it('should not be destroyed', () => {
    let ship = ModelFactory.createShip();

    ship.build([
      ModelFactory.createPosition(0, 0),
      ModelFactory.createPosition(1, 0),
      ModelFactory.createPosition(2, 0),
    ]);

    ship.hit();

    let { hits, isDestroyed } = ship;

    expect(hits).toBe(1);
    expect(isDestroyed).toBeFalse();
  });

  it('should be destroyed', () => {
    let ship = ModelFactory.createShip();

    ship.build([
      ModelFactory.createPosition(0, 0),
      ModelFactory.createPosition(1, 0),
    ]);

    ship.hit();
    ship.hit();

    let { hits, isDestroyed } = ship;

    expect(hits).toBe(2);
    expect(isDestroyed).toBeTrue();
  });
});
