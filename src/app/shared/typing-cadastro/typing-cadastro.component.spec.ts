import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingCadastroComponent } from './typing-cadastro.component';

describe('TypingCadastroComponent', () => {
  let component: TypingCadastroComponent;
  let fixture: ComponentFixture<TypingCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingCadastroComponent]
    });
    fixture = TestBed.createComponent(TypingCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
