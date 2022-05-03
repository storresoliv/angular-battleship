import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameboardService } from './services/gameboard.service';
import { GameboardComponent } from './components/gameboard.component';

@NgModule({
  declarations: [GameboardComponent],
  providers: [GameboardService],
  imports: [CommonModule],
  exports: [GameboardComponent],
})
export class GameboardModule {}
