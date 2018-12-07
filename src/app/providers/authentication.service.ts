import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../_models';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import {ApiService} from './api.service';

@Injectable()
export class AuthenticationService {
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

    constructor(private api: ApiService, private router: Router) {
    }

    login(pro) {
        return this.api.post('/pro/auth/login/', pro)
            .map(
                user => {
                    if (user && user['token']) {
                        localStorage.setItem('token', user['token']);
                        this.setUser(user);
                    }
                    return user;
                },
                error => {
                }
            );
    }

    signup(user: User) {
        return this.api.post('/pro/auth/register', user).map((response: Response) => {
            const newUser = response;
            if (newUser && newUser['token']) {
                localStorage.setItem('token', newUser['token']);
                this.setUser(newUser);
            }
            return newUser;
        });
    }

    setUser(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUser = user;
        return this.isLoginSubject.next(true);
    }

    getUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }


    updateUser(data) {
        delete data.password;
        this.setUser(Object.assign({}, this.currentUser, data));
    }


    isLoggedIn(): Observable<boolean> {
        return this.isLoginSubject.asObservable();
    }

    hasToken() {
        return !!localStorage.getItem('token');
    }

    getToken() {
        if (this.hasToken()) {
            return this.currentUser.token;
        }
        return null;
    }

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.isLoginSubject.next(false);
        return this.router.navigate(['/auth/login']);
    }

    resetPassword(email) {
        return this.api.put('/pro/auth/reset', email).map((response: Response) => {
            return response;
        });
    }

    getHomeURL() {
        if (!this.isLoggedIn()) {
            return '/auth/login';
        }
        else if (this.currentUser) {
            return '/admin/home';
        }
        else {
            return '/auth/login';
        }
    }

}
