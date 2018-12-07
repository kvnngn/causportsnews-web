import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CaresService {
    constructor(private api: ApiService) {
    }

    getCares(): Observable<any> {
        return this.api.get('/pro/cares');
    }
}
