import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../providers';
import {AlertService} from "../../providers/alert.service";

declare let swal: any;

@Component({
    moduleId: module.id,
    selector: 'register-cmp',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    RegisterForm: FormGroup;
    loading = false;
    loaderState = 0;
    today = Date.now();

    constructor(private router: Router,
                private  fb: FormBuilder,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) {
        this.RegisterForm = fb.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
            type: [null, Validators.required],
        });
    }

    get firstname() { return this.RegisterForm.get('firstname'); }

    get lastname() { return this.RegisterForm.get('lastname'); }

    get email() { return this.RegisterForm.get('email'); }

    get password() { return this.RegisterForm.get('password'); }

    get type() { return this.RegisterForm.get('type'); }

    register(formValues: any) {
        this.loaderState++;
        return this.authenticationService.signup(formValues)
        .finally(() => this.loaderState--)
        .subscribe(
            () => {this.router.navigate(['/admin/home/all'])},
            (err) => {
                console.log(err.error.error);
                if (err.error.error === 'Email already used') {
                    this.alertService.showNotification('warning', 'Email already used by other user..')
                }
            }
        );
    }
}

