import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../../providers/alert.service";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: './article-details.component.html',
    styleUrls: ['./article-details.component.css']
})

export class ArticleDetailsComponent implements OnInit {

    article: any;
    article_id = "";
    user: any;
    newComment: any = {content: '', user_id: '', article_id: ''};
    results: any = [];
    favorites: any = [];

    constructor(private userService: UserService,
                private _Activatedroute: ActivatedRoute,
                private alertService: AlertService,
                private authenticationService: AuthenticationService,
                private router: Router,
                private domSanitizer: DomSanitizer) {
        this.user = this.authenticationService.getUser();
        this.article_id = this._Activatedroute.snapshot.params.id;
        this.getArticle()
        this.getResults();
        if (this.user) {
            this.getFavorites();
        }
    }

    ngOnInit() {
    };

    getArticle() {
        this.userService.getArticleById(this.article_id).subscribe(
            article => {
                this.article = article;
                console.log(this.article);
                // console.log(this.articles);
            },
            error => {
                console.log(error)
            }
        );
    }

    addComment() {
        this.newComment.article_id = this.article_id;
        this.newComment.user_id = this.user.user.id;
        this.userService.addComment(this.newComment).subscribe(
            res => {
                this.newComment = '';
                this.alertService.showNotification('success', 'Comment successfully added.');
                this.getArticle();
                // console.log(this.articles);
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection..');
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
                this.alertService.showNotification('warning', 'Please check your connection..');
                console.log(error)
            }
        );
    }

    removeFromFavorites(article) {
        this.userService.removeFromFavorites(article.id).subscribe(
            res => {
                this.alertService.showNotification('warning', 'Article deleted from your favorite list');
                this.getFavorites();
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection..');
                console.log(error)
            }
        );
    }

    goToArticleDetails(article) {
        this.router.navigate(['/admin/article/details/' + article.id], article);
    }
}
