import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleshipRoutingModule } from './battleship-routing.module';

import { BattleshipComponent } from './components/battleship.component';

import { GameboardModule } from './gameboard/gameboard.module';
import { ShipModule } from './ship/ship.module';

@NgModule({
  declarations: [BattleshipComponent],
  imports: [CommonModule, BattleshipRoutingModule, GameboardModule, ShipModule],
})
export class BattleshipModule {}
