import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './users-list/user-details/user-details.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { USER_ROUTES } from './user.route';

@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent, EditUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(USER_ROUTES)
  ]
})
export class UserModule { }
