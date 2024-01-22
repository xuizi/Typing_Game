import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingMainGameDigitComponent } from './typing-main-game-digit.component';

describe('TypingMainGameDigitComponent', () => {
  let component: TypingMainGameDigitComponent;
  let fixture: ComponentFixture<TypingMainGameDigitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingMainGameDigitComponent]
    });
    fixture = TestBed.createComponent(TypingMainGameDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
