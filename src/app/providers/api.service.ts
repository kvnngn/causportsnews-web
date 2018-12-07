import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()

export class ApiService {

    constructor(private http: HttpClient) {
    }

    get(url: string) {
        url = this.updateUrl(url);
        return this.http.get(url);
    }


    post(url: string, body: any) {
        url = this.updateUrl(url);
        console.log(url);
        return this.http.post(url, body);
    }

    put(url: string, body: any) {
        url = this.updateUrl(url);
        return this.http.put(url, body, this.getRequestOptionArgs());
    }

    delete(url: string) {
        url = this.updateUrl(url);
        return this.http.delete(url, this.getRequestOptionArgs());
    }


    private updateUrl(req: string) {
        return environment.origin + req;
    }

    private getRequestOptionArgs() {
        const headers = new HttpHeaders()
        //    .set('Authorization', 'JWT ' + localStorage.getItem('token'))
            .set('Content-Type', 'application/json');
        return {headers};
    }

}
