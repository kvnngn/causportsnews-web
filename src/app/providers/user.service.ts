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

    addComment(newComment) {
        return this.api.post('/comment/create/', newComment);
    }

    getArticles() {
        return this.api.get('/articles');
    }

    getArticleById(id) {
        return this.api.get('/article/id/1');
    }
}
