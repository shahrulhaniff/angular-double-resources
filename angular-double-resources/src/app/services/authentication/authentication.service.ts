import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router
    ) { }

  authState = new BehaviorSubject(false);
  canActivate() : boolean {
    if (sessionStorage.getItem('accountid')) {
      this.router.navigate(['']);
      //return false;
      console.log("a services.ts > false");return false;
    }
    console.log("a services.ts > true");
    return true;
  }

  isAuthenticated() {
    return this.authState.value;
  }

}
