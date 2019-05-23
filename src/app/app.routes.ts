import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { LogGuardGuard } from "./shared/LogGuardGuard";

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
        canActivate: [LogGuardGuard]
    },
    {
        path: 'vinyl',
        loadChildren: './vinyl/vinyl.module#VinylModule',
        canActivate: [LogGuardGuard]
    }
];