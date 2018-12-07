import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AccountService {
    constructor(private api: ApiService) {
    }

    updatePassword(body): Observable<any> {
        return this.api.put('/pro/account/password', body);
    }

    update(body): Observable<any> {
        return this.api.put('/pro/account/update', body);
    }
}
