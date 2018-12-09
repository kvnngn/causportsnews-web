import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticlesEditComponent} from "./articles/articles-edit/articles-edit.component";
import {ArticlesNewComponent} from "./articles/articles-new/articles-new.component";

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
            path: 'article/edit:id',
            component: ArticlesEditComponent
        }
    ]
;
