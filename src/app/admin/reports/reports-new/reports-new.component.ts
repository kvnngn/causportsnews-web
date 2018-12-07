import {Component, OnInit, NgZone} from '@angular/core';
import {CaresService, FollowupsService, ProService} from '../../../providers';
import {AuthenticationService} from '../../../providers';
import {Router} from '@angular/router';
import {AlertService} from '../../../providers/alert.service';
import {PatientService} from '../../../providers/patient.service';
import {ReportsService} from '../../../providers/reports.service';

@Component({
    selector: 'app-followups-new',
    templateUrl: './reports-new.component.html',
    styleUrls: ['./reports-new.component.css']
})
export class ReportsNewComponent implements OnInit {

    patients: any = [];
    selectedPatientId: any = [];
    user;
    form : any = {content : '',}

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private authentificationService: AuthenticationService,
                private reportsService: ReportsService,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
        this.getPatients();
    }

    ngOnInit() {
    }

    getPatients() {
        this.patientService.getPatients().subscribe(
            patients => {this.ngZone.run(() => {this.patients = patients;});},
            error => {console.log(error);}
        );
    }

    createReport(){
        this.reportsService.createReport({
            content: this.form.content,
            date: this.form.date,
            patient_id: this.selectedPatientId,
            pro_id: this.user.pro.id
        }).subscribe(
            res => {
                this.router.navigate(['/admin/reports']);
                this.alertService.alert('success', 'Le rapport a bien été crée !');
            },
            error => {
                this.alertService.alert('warning', 'Veuillez sélectionner un patient et une date');
                console.log(error);
            }
        );
    }
}
