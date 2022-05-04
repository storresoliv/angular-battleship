import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattleshipRoutingModule } from './battleship-routing.module';

import { BattleshipComponent } from './components/battleship.component';

import { GameboardModule } from './modules/gameboard/gameboard.module';
import { ShipModule } from './modules/ship/ship.module';
import { MenuModule } from './modules/menu/menu.module';
import { ShotModule } from './modules/shot/shot.module';

@NgModule({
  declarations: [BattleshipComponent],
  imports: [
    CommonModule,
    BattleshipRoutingModule,
    GameboardModule,
    ShipModule,
    MenuModule,
    ShotModule
  ],
})
export class BattleshipModule {}
