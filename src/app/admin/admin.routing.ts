import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ArticleDetailsComponent} from "./articles/article-details/article-details.component";
import {PanelAdminComponent} from "./articles/panel-admin/panel-admin.component";

export const AdminRoutes: Routes = [
        {
            path: 'home/all',
            component: HomeComponent
        },
        {
            path: 'home/football',
            component: HomeComponent
        },
        {
            path: 'home/basketball',
            component: HomeComponent
        },
        {
            path: 'home/americanfootball',
            component: HomeComponent
        },
        {
            path: 'home/taekwondo',
            component: HomeComponent
        },
        {
            path: 'home/tennistable',
            component: HomeComponent
        },
        {
            path: 'home/panel',
            component: PanelAdminComponent
        },
        {
            path: 'article/details/:id',
            component: ArticleDetailsComponent
        }
    ]
;
