import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Router} from "@angular/router";
import {AlertService} from "../../providers/alert.service";

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
    currentUrl = '';
    splitUrl = [];

    constructor(private userService: UserService,
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) {
        this.user = this.authenticationService.getUser();
        this.currentUrl = this.router.url;
        this.getArticles();
        this.getResults();
        if (this.user) {this.getFavorites();}
    }

    ngOnInit() {
    };


    getAllArticles() {
        this.userService.getArticles().subscribe(
            articles => {
                this.articles = articles;
            },
            error => {
                console.log(error)
            }
        );
    }

    getArticles() {
        if (this.currentUrl == '/admin/home/all') {
            this.getAllArticles()
        }
        else {
            this.getArticlesByCategorie()
        }
    }

    getArticlesByCategorie() {
        let categorie;
        this.splitUrl = this.currentUrl.split('/');
        if (this.splitUrl[this.splitUrl.length - 1] == 'football') {
            categorie = 'Football'
        }
        if (this.splitUrl[this.splitUrl.length - 1] == 'americanfootball') {
            categorie = 'American football'
        }
        if (this.splitUrl[this.splitUrl.length - 1] == 'basketball') {
            categorie = 'Basket-ball'
        }
        if (this.splitUrl[this.splitUrl.length - 1] == 'taekwondo') {
            categorie = 'Taekwondo'
        }
        if (this.splitUrl[this.splitUrl.length - 1] == 'tennistable') {
            categorie = 'Tennis table'
        }
        this.userService.getArticlesByCategorie(categorie).subscribe(
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
                this.alertService.showNotification('success', 'Article added to your favorite list');
                this.getFavorites();
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection.');
                console.log(error)
            }
        );
    }

    removeFromFavorites(article) {
        this.userService.removeFromFavorites(article.id).subscribe(
            res => {
                this.alertService.showNotification('success', 'Article deleted from your favorite list');
                this.getFavorites();
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection.');
                console.log(error)
            }
        );
    }

    goToArticleDetails(article) {
        this.router.navigate(['/admin/article/details/' + article.id], article);
    }

    isFromFavorites(article_id) {}
}
