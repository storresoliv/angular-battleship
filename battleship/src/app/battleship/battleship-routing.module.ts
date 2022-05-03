import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleshipComponent } from './components/battleship.component';

const routes: Routes = [
  {
    path: '',
    component: BattleshipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BattleshipRoutingModule { }
