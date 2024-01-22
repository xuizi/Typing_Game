import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingHeaderComponent } from './typing-header.component';

describe('TypingHeaderComponent', () => {
  let component: TypingHeaderComponent;
  let fixture: ComponentFixture<TypingHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypingHeaderComponent]
    });
    fixture = TestBed.createComponent(TypingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
