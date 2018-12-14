import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailsComponent} from "./articles/article-details/article-details.component";
import {PanelAdminComponent} from "./articles/panel-admin/panel-admin.component";

export const AdminRoutes: Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'article/new',
            component: PanelAdminComponent
        },
        {
            path: 'article/details/:id',
            component: ArticleDetailsComponent
        }
    ]
;
