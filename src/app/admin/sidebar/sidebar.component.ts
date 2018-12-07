import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../providers';
import {AlertService} from '../../providers/alert.service';
import {PatientService} from '../../providers/patient.service';
import {ReportsService} from '../../providers/reports.service';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/admin/home', title: 'Accueil', icon: 'fa fa-home', class: ''},
    {path: '/admin/patients', title: 'Mes patients', icon: 'fa fa-user', class: ''},
    {path: '/admin/reports', title: 'Mes rapports', icon: 'fa fa-clipboard', class: ''},
    {path: '/admin/followups', title: 'Mes suivis', icon: 'fa fa-handshake-o', class: ''},
    {path: '/admin/settings', title: 'Paramètres', icon: 'fa fa-cogs', class: ''}
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    user: any;

    constructor(private patientService: PatientService,
                private ngZone: NgZone,
                private reportsService: ReportsService,
                private authentificationService: AuthenticationService,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authentificationService.getUser();
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
