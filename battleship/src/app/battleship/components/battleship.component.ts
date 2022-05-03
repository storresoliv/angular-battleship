import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/utils/logger';
import { GameboardService } from '../gameboard/services/gameboard.service';
import { GameBoard, Ship } from '../models';
import { ShipService } from '../ship/services/ship.service';

@Component({
  selector: 'bts-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.scss'],
})
export class BattleshipComponent implements OnInit {
  constructor(
    private readonly shipService: ShipService,
    private readonly gameboardService: GameboardService
  ) {}

  ngOnInit(): void {
    Logger.debug('building...');
    this.buildGame();
  }

  private buildGame(): void {
    Logger.debug('creating ships...');
    let ships = this.createShips();

    Logger.debug('creating gameboard...');
    let gameboard = this.createGameboard(10, ships);

    Logger.debug('load gameboard...')
    this.gameboardService.loadGameboard(gameboard);
  }

  private createShips(): Ship[] {
    return [
      this.shipService.createShip(4),
      this.shipService.createShip(3),
      this.shipService.createShip(3),
      this.shipService.createShip(2),
      this.shipService.createShip(2),
      this.shipService.createShip(2),
      this.shipService.createShip(1),
      this.shipService.createShip(1),
      this.shipService.createShip(1),
      this.shipService.createShip(1),
    ];
  }

  private createGameboard(dimension: number, ships: Ship[]): GameBoard {
    return this.gameboardService.createGameboard(dimension, ships);
  }
}
