import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShotService } from './services/shot.service';



@NgModule({
  providers: [ShotService],
  imports: [
    CommonModule
  ]
})
export class ShotModule { }
