import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingLoginComponent } from './typing-login.component';

describe('TypingLoginComponent', () => {
  let component: TypingLoginComponent;
  let fixture: ComponentFixture<TypingLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingLoginComponent]
    });
    fixture = TestBed.createComponent(TypingLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
