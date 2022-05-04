import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/utils/logger';
import { GameboardService } from '../modules/gameboard/services/gameboard.service';
import { GameBoard, Ship } from '../models';
import { ShipService } from '../modules/ship/services/ship.service';
import { environment } from 'src/environments/environment';
import { ShotService } from '../modules/shot/services/shot.service';

@Component({
  selector: 'bts-battleship',
  templateUrl: './battleship.component.html',
  styleUrls: ['./battleship.component.scss'],
})
export class BattleshipComponent implements OnInit {
  constructor(
    private readonly shipService: ShipService,
    private readonly gameboardService: GameboardService,
    private readonly shotsService: ShotService
  ) {}

  ngOnInit(): void {
    this.listenPlayAgain();
  }

  private listenPlayAgain(): void {
    this.gameboardService.playAgainEvent().subscribe(() => {
      this.buildGame();
    });
  }

  private buildGame(): void {
    Logger.debug('building...');
    Logger.debug('creating ships...');
    let ships = this.createShips();

    Logger.debug('creating gameboard...');
    let gameboard = this.createGameboard(environment.dimension, ships);

    let shots = this.getShots();
    Logger.debug(`getting shots ${shots}`);

    Logger.debug('load gameboard...');
    this.gameboardService.setShots(shots);
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

  private getShots(): number {
    return this.shotsService.getShots();
  }
}
