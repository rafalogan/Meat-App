import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NavigationEnd, Router} from '@angular/router';

import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

import {MEAT_API} from '../../app.api';
import {User} from './user';



@Injectable()
export class LoginService {

  user: User;
  laetUrl: string;

  constructor(
    private http: HttpClient,
    private router: Router) {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => this.laetUrl = event.url);
  }


  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${MEAT_API}/login`, {
      email: email,
      password: password
    }).pipe(tap(user => this.user = user))
  }

  handleLogin(path: string = this.laetUrl) {
    this.router.navigate(['/login', btoa(path)])
  }

  logout() {
    this.user = undefined;
  }
}
