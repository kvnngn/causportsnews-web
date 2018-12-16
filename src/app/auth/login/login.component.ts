import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../providers';
import {AlertService} from '../../providers/alert.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    pro: any = {'email': '', 'password': ''};
    user;

    constructor(private authenticationService: AuthenticationService,
                private alertService: AlertService,
                private router: Router) {

    }

    ngOnInit() {
    }

    submit() {
        if (this.pro.email && this.pro.password) {
            this.authenticationService.login(this.pro).subscribe(
                res => {
                    let url = this.authenticationService.getHomeURL();
                    if (localStorage.getItem('requestedURL')) {
                        url = localStorage.getItem('requestedURL');
                        localStorage.removeItem('requestedURL');
                    }
                    this.router.navigate([url]);
                },
                error => {
                    console.log(error);
                    if (error.error.error === 'invalid password') {
                        this.alertService.alert('warning', 'Incorrect password !');
                    }
                    else if (error.error.error === 'user not exist in DB') {
                        this.alertService.alert('warning', 'No user is related to this mail');
                    }
                }
            );
        }
    }
}
