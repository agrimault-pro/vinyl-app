import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //should be done in environnements repo
  baseUrl = 'https://jsonplaceholder.typicode.com';
/*
  users: Array<User> = [{
    id: 1,
    name: 'Doe',
    username: 'Jhon',
    email: 'jhon.doe@google.com',
    phone: '01 02 03 04 05',
    website: 'fr.wikipedia.org/wiki/John_Doe'
  },
  {
    id: 2,
    name: 'Lee',
    username: 'Bruce',
    email: 'bruce.lee@google.com',
    phone: '01 02 03 04 05',
    website: 'fr.wikipedia.org/wiki/Bruce_Lee'
  }
  ];*/

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<HttpResponse<Array<User>>> {
    return this.httpClient.get<Array<User>>(`${this.baseUrl}/users`, {observe: 'response'});
  }


  getOne(id: number) : Observable<HttpResponse<User>> {
    return this.httpClient.get<User>(`${this.baseUrl}/users/${id}`, {observe: 'response'});
  }


  delete(id: number) : void {
//    return this.httpClient.delete<User>(`${this.baseUrl}/users/${id}`, {observe: 'response'});
  }

  /*
  delete(id: number) : Array<User> {
   const user = this.getOne(id);
    if(user == null) throw Error('delete - user to delete does not exist !');
    this.users.splice(this.users.indexOf(user),1);
    return this.users;
}*/
 /*
  updateOne(user: User) : Array<User> {
    if(user == null) throw Error('updateOne - user to update is null and must not be !');
    const userToBeUpdated = this.getOne(user.id);
    if(userToBeUpdated == null) throw Error('updateOne - userToBeUpdated hasn\'t been retrieved in the data !');
    this.users[this.users.indexOf(userToBeUpdated)] = user;
    return this.users;
  }

  */
/*
  addOne(user : User) : Array<User> {
    if(user == null) throw Error('addOne - user to add is null and must not be !');
    this.users.push(user);
    return this.users;
  }
*/
}
