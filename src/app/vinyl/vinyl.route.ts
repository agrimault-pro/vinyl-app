import {Routes} from "@angular/router";
import { VinylsListComponent } from './vinyls-list/vinyls-list.component';
import { EditVinylComponent } from './vinyls-list/edit-vinyl/edit-vinyl.component';


export const VINYL_ROUTES: Routes = [
    {
        path: '',
        component: VinylsListComponent
    },
    {
        path: 'edit/:index',
        component: EditVinylComponent
    }
];