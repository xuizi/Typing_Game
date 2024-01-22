import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingRankingComponent } from './typing-ranking.component';

describe('TypingRankingComponent', () => {
  let component: TypingRankingComponent;
  let fixture: ComponentFixture<TypingRankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingRankingComponent]
    });
    fixture = TestBed.createComponent(TypingRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
