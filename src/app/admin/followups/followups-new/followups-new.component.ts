import {Component, OnInit, NgZone} from '@angular/core';
import {CaresService, FollowupsService, ProService} from '../../../providers';
import {AuthenticationService} from '../../../providers';
import {Router} from '@angular/router';
import {AlertService} from '../../../providers/alert.service';
import {PatientService} from '../../../providers/patient.service';

@Component({
    selector: 'app-followups-new',
    templateUrl: './followups-new.component.html',
    styleUrls: ['./followups-new.component.css']
})
export class FollowupsNewComponent implements OnInit {

    patients: any = [];
    cares: any = [];
    selectedPatientId: any = [];
    selectedCareId: any = [];
    user;

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private authentificationService: AuthenticationService,
                private followupsService: FollowupsService,
                private caresService: CaresService,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        this.getPatients();
        this.getCares();
    }

    ngOnInit() {
    }

    getPatients() {
        this.patientService.getPatients().subscribe(
            patients => {
                this.ngZone.run(() => {
                    console.log(patients);
                    this.patients = patients;
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    getCares() {
        this.caresService.getCares().subscribe(
            cares => {
                this.ngZone.run(() => {
                    console.log(cares);
                    this.cares = cares;
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    createFollowUp() {
        console.log(this.selectedCareId);
        console.log(this.selectedPatientId);
        this.followupsService.createFollowUp({
            cares_id: this.selectedCareId,
            patient_id: this.selectedPatientId,
            pro_id: this.user.pro.id
        }).subscribe(
            res => {
                this.router.navigate(['/admin/followups']);
                this.alertService.alert('success', 'Le suivi a bien été crée !');
            },
            error => {
                this.alertService.alert('warning', 'Veuillez sélectionner un patient et un soin pour la création d\'un suivi');
                console.log(error);
            }
        );
    }
}
