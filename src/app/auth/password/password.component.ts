import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';


declare let $: any;

@Component({
    moduleId: module.id,
    selector: 'password-cmp',
    templateUrl: './password.component.html'
})

export class ResetPasswordComponent implements OnInit {
    ResetForm: FormGroup;
    public loaderState: boolean;
    errorsFlagToMessages = {
        AUTH_FAILED_WRONG_CREDENTIALS: 'Email ou mot de passe incorrect',
        AUTH_FAILED_ACCOUNT_REVOKED: 'Votre compte est désactivé ou n\'a pas encore été vérifié.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_TIER1: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_TIER2: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_TIER3: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_TIER4: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_GROUP_TIER1: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_CONFIG_IN_PROGRESS_GROUP_TIER2: 'Vous n\'avez pas terminé la configuration de votre compte.',
        AUTH_FAILED_DEMO_MODE: 'Vous êtes en mode démo sur un compte fictif. Veuillez vous enregistrer pour profiter de l\'application.',
        PASSPORT_FAILED: 'Erreur d\'authentification, veuillez vous reconnecter.',
        INCORRECT_PARAM_password: 'Le mot de passe entré n\'est pas correct.',
        INCORRECT_PARAM_FRAME_CONFLICTS: 'Une ou plusieurs plage horaires existantes sont en conflit avec votre nouvelle plage.',
        STRIPE_ERROR_StripeCardError: 'La carte entrée carte n\'est pas valide.',
        DEMO_MODE: 'Vous êtes en mode démo. Veuillez souscrire pour profiter de l\'application.',
        NO_NETWORK: 'Vous ne semblez pas être connecté à internet.',
        UNIQUE_colleague_email: 'L\'adresse email du collègue entrée existe déjà. Demandez-lui s\'il/elle ne s\'est pas déjà inscrit(e).',
        UNIQUE_email: 'L\'adresse email est déjà utilisée.',
        SEQUELIZE_ERROR_SequelizeValidationError_email: 'L\'adresse email entrée n\'est pas valide.',
        INCORRECT_PARAM_website_url: 'L\'adresse du site web entrée n\'est pas valide'
    };

    constructor(private router: Router,
                private  fb: FormBuilder) {
        this.loaderState = false;
        this.ResetForm = fb.group({
            'email': [null, Validators.required]
        });
    }

    ngOnInit() {

    }

    resetpassword(value: any): void {
    }

    get email() {
        return this.ResetForm.get('email');
    }


    loaderShow() {
        this.loaderState = true;
    }

    loaderHide() {
        this.loaderState = false;
    }

}
