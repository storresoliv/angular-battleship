import { Injectable } from '@angular/core';
import { KEYS } from 'src/app/app.constant';
import { ObjectValue } from 'src/app/battleship/models/object-value';
import { StorageService } from 'src/app/storage/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class ShotService extends ObjectValue {
  constructor(private readonly storageService: StorageService) {
    super();
  }

  public getShots(): number {
    let shotsString = this.storageService.getSession(KEYS.SHOTS);
    let shots = 0;

    try {
      shots = JSON.parse(shotsString);
    } catch (error) {
      this.throwError(`Error al tratar de transformar los tiros.`);
    }

    return shots;
  }
}
