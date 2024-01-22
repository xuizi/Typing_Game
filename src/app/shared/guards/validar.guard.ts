import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TypingGamingService } from 'src/app/services/typing-gaming.service';

export const validarGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const typingGamingService = inject(TypingGamingService);

  if(!typingGamingService.isLoggedIn()) {
      router.navigate(['']);
      return false;
  }



  return true;
};
