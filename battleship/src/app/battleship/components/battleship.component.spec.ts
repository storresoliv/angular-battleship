import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GameboardModule } from '../modules/gameboard/gameboard.module';
import { GameboardService } from '../modules/gameboard/services/gameboard.service';
import { ShipModule } from '../modules/ship/ship.module';

import { BattleshipComponent } from './battleship.component';

describe('BattleshipComponent', () => {
  let component: BattleshipComponent;
  let fixture: ComponentFixture<BattleshipComponent>;
  let gameboardService: GameboardService;
  let createGameboardSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BattleshipComponent],
      imports: [GameboardModule, ShipModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    gameboardService = TestBed.inject(GameboardService);

    spyOn(gameboardService, 'playAgainEvent').and.returnValue(of({} as any));
    createGameboardSpy = spyOn(gameboardService, 'createGameboard');

    fixture = TestBed.createComponent(BattleshipComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build', () => {
    expect(createGameboardSpy).toHaveBeenCalled();
  });
});
