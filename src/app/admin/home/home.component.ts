import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    articles: any = [];
    results: any = [];
    favorites: any = [];
    user: any;

    constructor(private userService: UserService,
                private router: Router,
                private authenticationService: AuthenticationService) {
        this.user = this.authenticationService.getUser();
        console.log(this.user);
        this.getArticles();
        this.getResults();
        this.getFavorites();
    }

    ngOnInit() {
    };

    getArticles() {
        this.userService.getArticles().subscribe(
            articles => {
                this.articles = articles;
            },
            error => {
                console.log(error)
            }
        );
    }

    getResults() {
        this.userService.getResults().subscribe(
            results => {
                this.results = results;
            },
            error => {
                console.log(error)
            }
        );
    }

    getFavorites() {
        this.userService.getUserFavorites(this.user.user.id).subscribe(
            favorites => {
                this.favorites = favorites;
            },
            error => {
                console.log(error)
            }
        );
    }

    addToFavorites(article) {
        this.userService.addToFavorites({user_id: this.user.user.id, article_id: article.id}).subscribe(
            res => {
                this.getFavorites();
            },
            error => {
                console.log(error)
            }
        );
    }

    removeFromFavorites(article) {
        this.userService.removeFromFavorites(article.id).subscribe(
            res => {
                this.getFavorites();
            },
            error => {
                console.log(error)
            }
        );
    }

    goToArticleDetails(article) {
        this.router.navigate(['/admin/article/details/' + article.id], article);
    }

    isFromFavorites(article_id) {
        console.log(article_id)
        this.favorites.forEach((favorite) => {
           console.log(favorite.article_id)
       })
    }
}
