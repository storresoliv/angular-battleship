import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameboardModule } from '../modules/gameboard/gameboard.module';
import { ShipModule } from '../modules/ship/ship.module';

import { BattleshipComponent } from './battleship.component';

describe('BattleshipComponent', () => {
  let component: BattleshipComponent;
  let fixture: ComponentFixture<BattleshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleshipComponent ],
      imports: [GameboardModule, ShipModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
