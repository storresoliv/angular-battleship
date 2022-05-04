import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/utils/logger';
import { STATE } from '../../../battleship.constant';
import { CellBoard, GameBoard, Ship } from '../../../models';
import { GameboardService } from '../services/gameboard.service';

@Component({
  selector: 'bts-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
})
export class GameboardComponent implements OnInit {
  private _gameboard!: GameBoard;

  constructor(private readonly gameboardService: GameboardService) {}

  public get gameboard(): GameBoard {
    return this._gameboard;
  }

  public get shots(): number {
    return 0;
  }

  ngOnInit(): void {
    this.listenGameboardChanges();
  }

  private listenGameboardChanges(): void {
    this.gameboardService.gameboard.subscribe((gameboard) => {
      Logger.debug(`gameboard are loaded with dimension ${gameboard.dimension}`);
      this.setGameboard(gameboard);
    });
  }

  private setGameboard(gameboard: GameBoard): void {
    this._gameboard = gameboard;
  }

  public fireShot(x: number, y: number): void {
    let cellBoard = this.getCell(x, y);

    if (cellBoard.state !== STATE.CLEAN) return;

    Logger.debug(`fireShot is emitted on (${x},${y}) position`);

    cellBoard.setState(STATE.FAIL);

    if (cellBoard.isShip) {
      Logger.debug('this cell contain a ship: +1 hit');

      let ship = this.findShip(x, y);

      if (ship) {
        ship.hit();
      }

      cellBoard.setState(STATE.HIT);

      if (ship?.isDestroyed) {
        Logger.debug('this ship has been destroyed.');

        this.destroyShip(ship);
      }
    }
  }

  private destroyShip(ship: Ship): void {
    ship.positions.forEach(({ x, y }) => {
      let cellboard = this.getCell(x, y);

      cellboard.setState(STATE.DESTROYED);
    });
  }

  private findShip(x: number, y: number): Ship | undefined {
    let position = JSON.stringify({ x, y });

    return this.getShips().find((ship) =>
      ship.positions.join().includes(position)
    );
  }

  private getCell(x: number, y: number): CellBoard {
    let board = this.getBoard();

    return board[x][y];
  }

  public getBoard(): CellBoard[][] {
    return this._gameboard.board;
  }

  private getShips(): Ship[] {
    return this._gameboard.ships;
  }
}
