import { Injectable } from '@angular/core';
import { User } from '../../types/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  getUser(): User | undefined {
    const userSessionStorage = sessionStorage.getItem('user');
    if (userSessionStorage) {
      return JSON.parse(userSessionStorage);
    }
    return undefined;
  }
}
