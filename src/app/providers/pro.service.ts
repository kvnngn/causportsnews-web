import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';
import {User} from "../../_models";

@Injectable()
export class ProService {
    constructor(private api: ApiService) {
    }

    getPatientsByPro(id): Observable<any> {
        return this.api.get('/pro/patients/proId/' + id);
    }

    createPatient(patient) {
        return this.api.post('/pro/patient/create/', patient);
    }

    getFollowUps(id): Observable<any> {
        return this.api.get('/pro/followups/proId/' + id);
    }
}
