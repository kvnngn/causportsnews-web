import {Component, OnInit, NgZone} from '@angular/core';
import {AuthenticationService, ProService} from '../../providers';
import {PatientService} from '../../providers/patient.service';
import {ReportsService} from '../../providers/reports.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

    reports: any = {
        patient: {firstname: '', lastname: ''},
        content: ''
    };
    user;

    constructor(private proService: ProService,
                private reportsService: ReportsService,
                private authentificationService: AuthenticationService,
                private patientService: PatientService,
                private ngZone: NgZone) {
        this.user = this.authentificationService.getUser();
    }

    ngOnInit() {
        this.getReports();
    }

    getReports() {
        this.reportsService.getReportsByProId(this.user.pro.id).subscribe(
            reports => {
                this.ngZone.run(() => {
                    this.reports = reports;
                    console.log(reports);
                });
            },
            error => {
                console.log(error);
            }
        );
    }
}
