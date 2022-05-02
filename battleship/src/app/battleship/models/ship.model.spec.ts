import { ModelFactory } from './model-factory';
import { createPosition } from './ship.model';

const normalize = (object: any) => JSON.stringify(object);

describe('Ship', () => {
  it('should create', () => {
    let ship = ModelFactory.createShip(1);

    expect(ship).toBeTruthy();
  });

  it('should size be 4', () => {
    let ship = ModelFactory.createShip(4);
    let { size } = ship;

    expect(size).toBe(4);
  });

  it('should build', () => {
    let ship = ModelFactory.createShip(2);

    let startPosition = { x: 0, y: 0 };
    let secondPosition = { x: 1, y: 0 };

    ship.build(startPosition, 'RIGHT');

    let {
      positions: [, secondPos],
    } = ship;

    expect(normalize(secondPos)).toBe(normalize(secondPosition));
  });

  it('should not re-build', () => {
    let ship = ModelFactory.createShip(2);

    let startPosition = { x: 0, y: 0 };
    let secondPosition = { x: 1, y: 0 };

    ship.build(startPosition, 'RIGHT');
    ship.build(startPosition, 'LEFT');

    let {
      positions: [, secondPos],
    } = ship;

    expect(normalize(secondPos)).toBe(normalize(secondPosition));
  });

  it('should not be destroyed', () => {
    let ship = ModelFactory.createShip(2);

    ship.hit();

    let { hits } = ship;

    expect(hits).toBe(1);
  });

  it('should be destroyed', () => {
    let ship = ModelFactory.createShip(2);

    ship.hit();
    ship.hit();

    let { hits, isDestroyed } = ship;

    expect(hits).toBe(2);
    expect(isDestroyed).toBeTrue();
  });
});

describe('create new position', () => {
  it('create new position right', () => {
    let position = { x: 1, y: 1 };
    let newPosition = createPosition(position, 'RIGHT');

    expect(normalize(newPosition)).toBe(normalize({ x: 2, y: 1 }));
  });

  it('create new position left', () => {
    let position = { x: 1, y: 1 };
    let newPosition = createPosition(position, 'LEFT');

    expect(normalize(newPosition)).toBe(normalize({ x: 0, y: 1 }));
  });

  it('create new position up', () => {
    let position = { x: 1, y: 1 };
    let newPosition = createPosition(position, 'UP');

    expect(normalize(newPosition)).toBe(normalize({ x: 1, y: 2 }));
  });

  it('create new position down', () => {
    let position = { x: 1, y: 1 };
    let newPosition = createPosition(position, 'DOWN');

    expect(normalize(newPosition)).toBe(normalize({ x: 1, y: 0 }));
  });

  it('should not create new position', () => {
    let position = { x: 1, y: 1 };
    let newPosition = createPosition(position, 'not' as any);

    expect(normalize(newPosition)).toBe(normalize({ x: 1, y: 1 }));
  });
});
