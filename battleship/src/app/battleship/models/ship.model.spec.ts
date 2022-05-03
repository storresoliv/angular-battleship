import { ModelsFactory } from './models.factory';

describe('Ship', () => {
  it('should create', () => {
    let ship = ModelsFactory.createShip();

    expect(ship).toBeTruthy();
  });

  it('should size be 4', () => {
    let ship = ModelsFactory.createShip();

    ship.build([
      ModelsFactory.createPosition(0, 0),
      ModelsFactory.createPosition(1, 0),
      ModelsFactory.createPosition(2, 0),
      ModelsFactory.createPosition(3, 0),
    ]);

    let { size } = ship;

    expect(size).toBe(4);
  });

  it('should build', () => {
    let ship = ModelsFactory.createShip();

    ship.build([
      ModelsFactory.createPosition(0, 0),
      ModelsFactory.createPosition(1, 0),
      ModelsFactory.createPosition(2, 0),
    ]);

    let {
      positions: [, , thirdPos],
    } = ship;

    expect(thirdPos.toString()).toBe(JSON.stringify({ x: 2, y: 0 }));
  });

  it('should not re-build', () => {
    let ship = ModelsFactory.createShip();
    let isBuilded = false;

    ship.build([
      ModelsFactory.createPosition(0, 0),
      ModelsFactory.createPosition(1, 0),
      ModelsFactory.createPosition(2, 0),
    ]);

    try {
      ship.build([
        ModelsFactory.createPosition(0, 1),
        ModelsFactory.createPosition(1, 1),
        ModelsFactory.createPosition(2, 1),
      ]);
    } catch (error) {
      isBuilded = true;
    }

    let {
      positions: [, secondPos],
    } = ship;

    expect(isBuilded).toBeTrue();
    expect(secondPos.toString()).toBe(JSON.stringify({ x: 1, y: 0 }));
  });

  it('should not be destroyed', () => {
    let ship = ModelsFactory.createShip();

    ship.build([
      ModelsFactory.createPosition(0, 0),
      ModelsFactory.createPosition(1, 0),
      ModelsFactory.createPosition(2, 0),
    ]);

    ship.hit();

    let { hits, isDestroyed } = ship;

    expect(hits).toBe(1);
    expect(isDestroyed).toBeFalse();
  });

  it('should be destroyed', () => {
    let ship = ModelsFactory.createShip();

    ship.build([
      ModelsFactory.createPosition(0, 0),
      ModelsFactory.createPosition(1, 0),
    ]);

    ship.hit();
    ship.hit();

    let { hits, isDestroyed } = ship;

    expect(hits).toBe(2);
    expect(isDestroyed).toBeTrue();
  });
});
