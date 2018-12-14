import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../providers";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    articles : any = [];
    user : any;

    constructor(private userService: UserService,
                private authenticationService: AuthenticationService) {
        this.user = this.authenticationService.getUser();
        console.log(this.user);
        this.getArticles()
    }

    ngOnInit() {
    };

    getArticles() {
        this.userService.getArticles().subscribe(
            articles => {
                console.log(articles)
            },
            error => {
                console.log(error)
            }
        );
    }
}
