import {Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from '../../providers';
import {Location} from '@angular/common';

declare var $: any;

export const ROUTES = [
    {path: '/admin/home', title: 'Home', icon: 'fa fa-home', class: ''},
    {path: '/admin/article/new', title: 'New article', icon: 'fa fa-user', class: ''}
];
@Component({
    moduleId: module.id,
    selector: 'adminnavbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls: ['./navbar.component.css']

})

export class NavbarComponent implements OnInit {
    location: Location;
    private nativeElement: Node;
    private toggleButton;
    private sidebarVisible: boolean;
    public menuItems: any[];


    @ViewChild('adminnavbar-cmp') button;

    constructor(location: Location,
                private renderer: Renderer,
                private element: ElementRef,
                private authenticationService: AuthenticationService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }

    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    logout() {
        return this.authenticationService.logout();
    }
}
