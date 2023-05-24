import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/types/user.model';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  private readonly apiPath = `${environment.apiPath}/users`;
  private readonly options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  users: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiPath, this.options);
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(this.apiPath, { params: { email, password } });
  }

  GetUserbyId(id: number): Observable<User>{
    return this.http.get<User>(this.apiPath+`/${id}`, this.options);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiPath, user, this.options);
  }
}
