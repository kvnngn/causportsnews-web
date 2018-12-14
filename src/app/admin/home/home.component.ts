import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    articles: any = [];
    user: any;

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
                this.articles = articles;
                console.log(this.articles);
                // console.log(this.articles);
            },
            error => {
                console.log(error)
            }
        );
    }
}
