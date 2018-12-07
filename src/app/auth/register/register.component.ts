import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../providers';

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
                private authenticationService: AuthenticationService) {
        this.RegisterForm = fb.group({
            civility: ['F', Validators.required],
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            city: [null, Validators.required],
            adeli: [null, [Validators.required, Validators.pattern(/^[0-9]{9,11}$/)]],
            phone: [null, [Validators.required, Validators.pattern(/^0[6-7][0-9]{8}$/)]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }

    get civility() { return this.RegisterForm.get('civility'); }

    get firstname() { return this.RegisterForm.get('firstname'); }

    get lastname() { return this.RegisterForm.get('lastname'); }

    get adeli() { return this.RegisterForm.get('adeli'); }

    get phone() { return this.RegisterForm.get('phone'); }

    get email() { return this.RegisterForm.get('email'); }

    get city() { return this.RegisterForm.get('city'); }

    get password() { return this.RegisterForm.get('password'); }

    register(formValues: any) {
        this.loaderState++;
        return this.authenticationService.signup(formValues)
        .finally(() => this.loaderState--)
        .subscribe(
            () => {this.router.navigate(['/admin/home'])},
            (err) => {
                console.log(err);
                let msg = '';
                if (err.error === 'Email already used') {msg = 'L\'email est déja utilisé par un autre professionel de santé';}
                if (err.error === 'Name already used') {msg = 'Le nom et prénom sont déjà utilisés par autre professionel de santé';}
            }
        );
    }
}

