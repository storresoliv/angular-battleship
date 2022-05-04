import { Injectable } from '@angular/core';
import { ModelsFactory, Ship } from '../../../models';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  constructor() {}

  createShip(size?: number): Ship {
    return ModelsFactory.createShip(size);
  }
}
