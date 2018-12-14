import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticlesNewComponent} from "./articles/articles-new/articles-new.component";
import {ArticleDetailsComponent} from "./articles/article-details/article-details.component";

export const AdminRoutes: Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'article/new',
            component: ArticlesNewComponent
        },
        {
            path: 'article/details/:id',
            component: ArticleDetailsComponent
        }
    ]
;
