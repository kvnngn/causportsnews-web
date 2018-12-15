import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";

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
                private authenticationService: AuthenticationService) {
        this.user = this.authenticationService.getUser();
        this.article_id = this._Activatedroute.snapshot.params.id;
        console.log(this.user);
        this.getArticle()
        this.getResults();
        if (this.user) {this.getFavorites();}
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
                this.getArticle();
                // console.log(this.articles);
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
}
