import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Subscription, Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<Array<User>>;

  constructor(private userService: UserService) { }

  ngOnInit() {   
    this.users = this.userService.getAll().pipe(
      filter((res) => res.ok),
      map((res) => res.body)
    );
  }

}
