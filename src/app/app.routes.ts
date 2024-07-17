import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'layout',
        pathMatch:'full'
    },
    {
        path:'layout',
        component:LayoutComponent,
        children:[
            {
                path:'register-user',
                component:RegisterUserComponent
            },
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'users',
                component:UsersComponent
            }
        ]
    }
        
];
