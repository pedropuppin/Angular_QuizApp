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

  getUsers() {
    return this.http.get<User[]>(this.apiPath, this.options);
  }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.get(this.apiPath, { params: { email, password } });
  }

  GetUserbyId(id: number){
    return this.http.get(this.apiPath+`/${id}`, this.options);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiPath, user, this.options);
  }
}
