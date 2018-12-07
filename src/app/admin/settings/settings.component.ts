import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountService, AuthenticationService} from '../../providers';
import {AlertService} from '../../providers/alert.service';
import {PatientService} from '../../providers/patient.service';
import {ReportsService} from '../../providers/reports.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    user: any;
    passwordForm: any = {currentPassword: '', newPassword: '', confirmedNewPassword: ''};

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private reportsService: ReportsService,
                private authentificationService: AuthenticationService,
                private accountService: AccountService,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        this.passwordForm.pro_id = this.user.pro.id;
        console.log(this.user);
    }

    ngOnInit() {
    }

    updatePassword() {
        console.log(this.passwordForm);
        if (!this.passwordForm.currentPassword && !this.passwordForm.newPassword && !this.passwordForm.confirmedNewPassword) {
            return this.alertService.alert('warning', 'Vous devez indiquer votre mot de passe actuel ' +
                'et un nouveau de passe de votre choix');
        }
        if (this.passwordForm.newPassword != this.passwordForm.confirmedNewPassword) {
            return this.alertService.alert('warning', 'Le champ de mot de passe confirmation est ' +
                'différent du nouveau mot de passe');
        }
        this.accountService.updatePassword(this.passwordForm).subscribe(
            res => {this.alertService.alert('success', 'Le mot de passe a bien été modifié !');},
            error => {this.alertService.alert('warning', 'Une erreur est survenue lors du changement de mot de passe.');}
        );
    }

    update() {
        this.accountService.update(this.user.pro).subscribe(
            res => {
                localStorage.setItem('currentUser', JSON.stringify(res));
                this.alertService.alert('success', 'Vos coordonnées ont bien été modifié !');
            },
            error => {this.alertService.alert('warning', 'Une erreur est survenue lors de la mise à jour de vos données.');}
        );
    }
}
