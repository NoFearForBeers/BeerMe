import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private service: AuthService, private router: Router) {}

  canActivate() {
    console.log(this.service);
    
    if (!this.service.authenticated()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
