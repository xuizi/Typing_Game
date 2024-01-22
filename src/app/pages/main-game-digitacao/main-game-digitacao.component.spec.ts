import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGameDigitacaoComponent } from './main-game-digitacao.component';

describe('MainGameDigitacaoComponent', () => {
  let component: MainGameDigitacaoComponent;
  let fixture: ComponentFixture<MainGameDigitacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainGameDigitacaoComponent]
    });
    fixture = TestBed.createComponent(MainGameDigitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
