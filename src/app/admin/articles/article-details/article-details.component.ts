import {Component, OnInit} from '@angular/core';
import {AuthenticationService, UserService} from "../../../providers";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {ActivatedRoute} from "@angular/router";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'article-details.component.html'
})

export class ArticleDetailsComponent implements OnInit {

    article: any;
    article_id = "";
    user: any;
    newComment: any = {content: '', user_id: '', article_id: ''}

    constructor(private userService: UserService,
                private _Activatedroute: ActivatedRoute,
                private authenticationService: AuthenticationService) {
        this.user = this.authenticationService.getUser();
        this.article_id = this._Activatedroute.snapshot.params.id;
        console.log(this.user);
        this.getArticle()

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
}
