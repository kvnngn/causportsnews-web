import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PatientService {
    constructor(private api: ApiService) {
    }

    getPatientById(id): Observable<any> {
        return this.api.get('/pro/article/id/' + id);
    }

    getPatients(): Observable<any> {
        return this.api.get('/pro/patients');
    }

    update(params): Observable<any> {
        return this.api.put('/pro/article/update', params);
    }

    resetPassword(params): Observable<any> {
        return this.api.put('/pro/article/resetPassword', params);
    }
}
