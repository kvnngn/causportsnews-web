import {Component, OnInit, Renderer, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from '../../providers';
import {ROUTES} from '../../admin/sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'authnavbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit {
    location: Location;
    private nativeElement: Node;
    private sidebarVisible: boolean;

    @ViewChild('authnavbar-cmp') button;

    constructor(location: Location,
                private renderer: Renderer,
                private element: ElementRef,) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }

    ngOnInit() {
    }
}
