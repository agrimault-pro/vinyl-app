import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.route.params.pipe(
      map(params => +params.id),
      flatMap(id => this.userService.getOne(id) ),
      map( res => res.body)
    ).subscribe(user => {
      this.user = user;
    });
  }

  updateUser() {
    console.log('update of the current user ! - username = '+ this.user.username);

    this.router.navigate(['user']);
  }
}
