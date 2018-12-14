import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";

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
                private router: Router,
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

    goToArticleDetails(article) {
        console.log(article)
        this.router.navigate(['/admin/article/details/' + article.id], article);
    }
}
