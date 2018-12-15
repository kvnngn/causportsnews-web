import {Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from '../../providers';
import {Location} from '@angular/common';

declare var $: any;

export const ROUTES = [
    {path: '/admin/home/all', title: 'All Sports', icon: 'fa fa-home', class: '', type: 'All'},
    {path: '/admin/home/football', title: 'Football', icon: 'fa fa-futbol-o', class: '', type: 'All', category: 'Football'},
    {
        path: '/admin/home/basketball',
        title: 'Basket-ball',
        icon: 'fas fa-basketball-ball',
        class: '',
        type: 'All',
        category: 'Basket-ball'
    },
    {
        path: '/admin/home/americanfootball',
        title: 'American football',
        icon: 'fas fa-football-ball',
        class: '',
        type: 'All',
        category: 'American football'
    },
    {path: '/admin/home/taekwondo', title: 'Taekwondo', icon: 'fas fa-walking', class: '', type: 'All', category: 'Taekwondo'},
    {
        path: '/admin/home/tennistable',
        title: 'Table tennis',
        icon: 'fas fa-table-tennis',
        class: '',
        type: 'All',
        category: 'Table tennis'
    },
    {path: '/admin/home/panel', title: 'Panel Admin', icon: 'fa fa-user', type: 'Admin'}
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
    user;

    @ViewChild('adminnavbar-cmp') button;

    constructor(location: Location,
                private renderer: Renderer,
                private element: ElementRef,
                private authenticationService: AuthenticationService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.user = this.authenticationService.getUser();
        console.log(this.user);
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
