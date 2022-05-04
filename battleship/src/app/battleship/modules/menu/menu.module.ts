import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu.component';
import { StorageModule } from 'src/app/storage/storage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, StorageModule, ReactiveFormsModule, FormsModule],
  declarations: [MenuComponent],
})
export class MenuModule {}
