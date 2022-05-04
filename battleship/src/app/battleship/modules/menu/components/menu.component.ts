import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KEYS } from 'src/app/app.constant';
import { StorageService } from 'src/app/storage/services/storage.service';
import { Logger } from 'src/app/utils/logger';

@Component({
  selector: 'bts-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  public shots = new FormControl(0, [Validators.required, Validators.min(0)]);

  ngOnInit(): void {}

  play(): void {
    let shotsRaw: string = this.shots.value;

    let shots = Number(shotsRaw)


    if (this.shots.valid && shots > 0) {
      Logger.debug(`valid number of shots ${shotsRaw}`);

      this.saveShots(shotsRaw);

      return this.goToGameboard();
    }

    this.shots.setErrors({})
  }

  private saveShots(shots: string): void {
    this.storageService.setSession(KEYS.SHOTS, shots);
  }

  private goToGameboard(): void {
    this.router.navigate(['battleship/gameboard']);
  }
}
