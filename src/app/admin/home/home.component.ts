import {Component, OnInit} from '@angular/core';
import {UserService} from "../../providers";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    articles : any = [];

    constructor(private userService: UserService) {
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
