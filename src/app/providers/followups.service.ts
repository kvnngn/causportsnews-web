import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class FollowupsService {
    constructor(private api: ApiService) {
    }

    createFollowUp(body): Observable<any> {
        return this.api.post('/pro/followup/new', body);
    }
}
