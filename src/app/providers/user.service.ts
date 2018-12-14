import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserService {
    constructor(private api: ApiService) {
    }

    createArticle(article) {
        return this.api.post('/article/create/', article);
    }

    getArticles() {
        return this.api.get('/articles');
    }

    getArticleById() {
        return this.api.get('/article/id/1');
    }
}
