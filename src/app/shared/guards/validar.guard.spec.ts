import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validarGuard } from './validar.guard';

describe('validarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
