import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingMainHeaderComponent } from './typing-main-header.component';

describe('TypingMainHeaderComponent', () => {
  let component: TypingMainHeaderComponent;
  let fixture: ComponentFixture<TypingMainHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingMainHeaderComponent]
    });
    fixture = TestBed.createComponent(TypingMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
