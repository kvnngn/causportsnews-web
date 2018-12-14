import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule, SafeResourceUrl} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';
import {AccountService, AuthenticationService, CaresService, FollowupsService, UserService} from './providers';
import {AlertService} from './providers/alert.service';
import {PatientService} from './providers/patient.service';
import {ReportsService} from './providers/reports.service';
import {NotFoundComponent} from './shared/404/404.component';
import {ErrorComponent} from './shared/error/error.component';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {ApiService} from './providers';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthnavbarModule} from './shared/navbar/authnavbar.module';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AdminGuard} from './providers/admin-guard.service';
import {AdminNavbarModule} from "./admin/admin-navbar/navbar.module";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {SafeHtml} from "./shared/SafeHtml";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        NotFoundComponent,
        AuthLayoutComponent,
        AdminLayoutComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        NavbarModule,
        FooterModule,
        ReactiveFormsModule,
        AuthnavbarModule,
        AdminNavbarModule,
        MDBBootstrapModule.forRoot(),
    ],
    providers: [
        ApiService,
        UserService,
        HttpClient,
        AuthenticationService,
        AdminGuard,
        PatientService,
        AlertService,
        CaresService,
        FollowupsService,
        ReportsService,
        AccountService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
