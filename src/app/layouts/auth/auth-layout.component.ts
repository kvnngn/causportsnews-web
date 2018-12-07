import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import 'rxjs/add/operator/filter';
import {AuthenticationService} from '../../providers/index';

declare let $: any;

@Component({
    selector: 'app-layout',
    templateUrl: './auth-layout.component.html'
})

export class AuthLayoutComponent implements OnInit {
    location: Location;
    private _router: Subscription;


    constructor(private router: Router, location: Location, auth: AuthenticationService) {
        this.location = location;
    }

    ngOnInit() {

        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
        });


    }
}
