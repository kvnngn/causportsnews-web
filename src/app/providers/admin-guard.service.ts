import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Location} from '@angular/common';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private location: Location) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        localStorage.setItem('requestedURL', state.url);
        this.router.navigate(['/auth/login']);
        return false;
    }

}