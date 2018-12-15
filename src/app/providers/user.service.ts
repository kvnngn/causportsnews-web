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

    addToFavorites(infos) {
        return this.api.post('/favorite/create/', infos);
    }

    removeFromFavorites(id) {
        return this.api.delete('/favorite/delete/id/' + id);
    }

    addResult(newResult) {
        return this.api.post('/result/create/', newResult);
    }

    getArticles() {
        return this.api.get('/articles');
    }

    getArticlesByCategorie(categorie) {
        return this.api.get('/articles/categorie/' + categorie);
    }

    getUserFavorites(id) {
        return this.api.get('/favorites/id/' + id);
    }

    getResults() {
        return this.api.get('/results');
    }

    getArticleById(id) {
        return this.api.get('/article/id/1');
    }
}
