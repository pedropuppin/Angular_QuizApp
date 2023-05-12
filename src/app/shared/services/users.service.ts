import { Injectable } from '@angular/core';
import { User } from '../types/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: Array<User> = [
    {
      id: 1,
      name: 'Pedro',
      email: 'puppin.pedro@gmail.com',
      password: '123123'
    },
  ];

  getUsers() {
    return this.users;
  }

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find(user => user.email === email && user.password === password);
  }

  create(user: Partial<User>) {
    user.id = this.generateNextId();
    this.users.push(user as User);
    //return this.http.post<Colaborator>(this.baseURL + '/colaborators/create/', colaborator, this.options); // passamos a rota e o objeto que queremos criar (colaborator)
  }

  generateNextId() {
    return this.users[(this.users.length - 1)].id + 1;
  }
}
