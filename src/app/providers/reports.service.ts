import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ReportsService {
    constructor(private api: ApiService) {
    }

    createReport(body): Observable<any> {
        return this.api.post('/pro/report/new', body);
    }

    getReportsByProId(id): Observable<any> {
        return this.api.get('/pro/reports/proId/' + id);
    }

    getReportsByPatientId(id): Observable<any> {
        return this.api.get('/pro/reports/patientId/' + id);
    }

}
