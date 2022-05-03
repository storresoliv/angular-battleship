import { Component, OnInit } from '@angular/core';
import { STATE } from '../../battleship.constant';
import { CellBoard, GameBoard, Ship } from '../../models';
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
    this.gameboardService.gameboard.subscribe((gameboard) =>
      this.setGameboard(gameboard)
    );
  }

  private setGameboard(gameboard: GameBoard): void {
    this._gameboard = gameboard;
  }

  public fireShot(x: number, y: number): void {
    let cellBoard = this.getCell(x, y);

    if (cellBoard.state !== STATE.CLEAN) return;

    cellBoard.setState(STATE.FAIL);

    if (cellBoard.isShip) {
      cellBoard.setState(STATE.HIT);

      let ship = this.findShip(x, y);

      if (ship) {
        ship.hit();
      }

      if (ship?.isDestroyed) {
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
