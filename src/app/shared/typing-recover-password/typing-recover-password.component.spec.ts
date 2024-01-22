import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingRecoverPasswordComponent } from './typing-recover-password.component';

describe('TypingRecoverPasswordComponent', () => {
  let component: TypingRecoverPasswordComponent;
  let fixture: ComponentFixture<TypingRecoverPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingRecoverPasswordComponent]
    });
    fixture = TestBed.createComponent(TypingRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
