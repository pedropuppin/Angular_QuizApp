import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/types/user.model';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(
    private http: HttpClient
  ) { }

  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  readonly apiPath = `${environment.apiPath}/users`;


  getUsers() {
    return this.http.get<User[]>(this.apiPath, this.options);
  }

  authenticate(email: string, password: string): Observable<any> {
    return this.http.get(this.apiPath, { params: { email, password } });
  }

  GetUserbyId(id:any){
    return this.http.get(this.apiPath+`/${id}`, this.options);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.apiPath, user);
  }

  // create(user: User) {
  //   // user.id = this.generateNextId();
  //   // this.users.push(user as User);
  //   return this.http.post<User>(this.apiPath + '/create/', user, this.options);
  // }

  // generateNextId() {
  //   // return this.users[(this.users.length - 1)].id + 1;
  // }
}
