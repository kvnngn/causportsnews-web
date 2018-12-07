import {Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ResetPasswordComponent} from './password/password.component';


export const AuthRoutes: Routes = [{
    path: '',
    children: [{
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: 'resetpassword',
        component: ResetPasswordComponent
    }
    ]
}];

