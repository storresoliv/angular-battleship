import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleshipComponent } from './components/battleship.component';

import { GameboardComponent } from './modules/gameboard/components/gameboard.component';
import { MenuComponent } from './modules/menu/components/menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'battleship/menu'
  },
  {
    path: 'battleship',
    component: BattleshipComponent,
    children: [
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'gameboard',
        component: GameboardComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleshipRoutingModule { }
