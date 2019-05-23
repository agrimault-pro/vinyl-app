import {Routes} from "@angular/router";
import { UsersListComponent } from './users-list/users-list.component';
import { EditUserComponent } from './users-list/edit-user/edit-user.component';


export const USER_ROUTES: Routes = [
    {
        path: '',
        component: UsersListComponent
    },
    {
        path: 'edit/:id',
        component: EditUserComponent
    }
];