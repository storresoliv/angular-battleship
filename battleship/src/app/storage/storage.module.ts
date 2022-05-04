import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';



@NgModule({
  providers: [StorageService],
  imports: [
    CommonModule
  ]
})
export class StorageModule { }
