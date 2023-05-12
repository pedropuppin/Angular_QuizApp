import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard = () => {
  const router = inject(Router);
  const user = sessionStorage.getItem('user');
  if(user) return true;
  router.navigateByUrl('login');
  return false;
}
