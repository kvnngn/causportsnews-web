import {Component, OnInit, NgZone} from '@angular/core';
import {ProService} from '../../../providers';
import {AuthenticationService} from '../../../providers';
import {Router} from "@angular/router";

@Component({
    selector: 'app-patients',
    templateUrl: './patient-new.html',
    styleUrls: ['../patients.component.css']
})
export class PatientsNewComponent implements OnInit {

    patient: any = {
        firstname: '',
        lastname: '',
        birthdate: '',
        civility: 'M'
    };
    user;

    constructor(private proService: ProService,
                private ngZone: NgZone,
                private authentificationService: AuthenticationService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        this.patient.pro_id = this.user.pro.id;
    }

    ngOnInit() {
    }

    createPatient() {
        this.proService.createPatient(this.patient).subscribe(
            patient => {
                console.log(patient)
                this.router.navigate(['/admin/patients']);
            },
            error => {
            }
        );
    }
}
