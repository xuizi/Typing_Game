import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingMainGameComponent } from './typing-main-game.component';

describe('TypingMainGameComponent', () => {
  let component: TypingMainGameComponent;
  let fixture: ComponentFixture<TypingMainGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingMainGameComponent]
    });
    fixture = TestBed.createComponent(TypingMainGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
