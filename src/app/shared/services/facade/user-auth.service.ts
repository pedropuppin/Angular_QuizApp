import { Injectable } from '@angular/core';
import { User } from '../../types/user.model';
import { UsersApiService } from '../core/async/users-api.service';
import { BehaviorSubject, catchError, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _hasError$ = new BehaviorSubject<boolean>(false);
  hasError$ = this._hasError$.asObservable();

  constructor(
    private userApi: UsersApiService,
  ) { }

  loginUser(userEmail: string, userPassword: string): void {
    this.userApi.getUserByEmailAndPassword(userEmail, userPassword)
    .pipe(
      take(1),
      tap(res => {
        const response = JSON.parse(JSON.stringify(res));
        if(response.length > 0) {
          this._isLoggedIn$.next(true);
          const user = JSON.parse(JSON.stringify(response[0]));
          sessionStorage.setItem('user', JSON.stringify(user));
        } else {
          this._hasError$.next(true);
          throw new Error('Invalid credentials');
        }
      }),
      catchError(error => {
        //console.error(error);
        return of(null);
      })
    ).subscribe();
  }

  logoutUser(): void {
    this._isLoggedIn$.next(false);
    this._hasError$.next(false);
    sessionStorage.clear();
  }

  getUser(): User | undefined {
    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage) {
      return JSON.parse(userSessionStorage);
    }
    return undefined;
  }
}
