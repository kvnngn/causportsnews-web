import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService, ProService} from '../../providers';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

    patients: any = [];
    user;

    constructor(private proService: ProService,
                private router: Router,
                private authentificationService: AuthenticationService,
                private ngZone: NgZone) {
        this.user = this.authentificationService.getUser();
    }

    ngOnInit() {
        this.getPatientsByPro();
    }

    getPatientsByPro() {
        this.proService.getPatientsByPro(this.user.pro.id).subscribe(
            patients => {
                this.ngZone.run(() => {this.patients = patients;});
                console.log(patients);
                console.log(this.patients)
            },
            error => {
                console.log(error);
            }
        );
    }

    goToPatientEdit(patient){
        this.router.navigate(['/admin/patients/edit/' + patient.id], patient);
    }
}
