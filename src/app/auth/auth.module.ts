import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetPasswordComponent} from './password/password.component';
import {AuthRoutes} from "./auth.routing";

@NgModule({
    imports: [
        RouterModule.forChild(AuthRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
    ],
    providers: [],
    exports: [

    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AuthModule {
}
