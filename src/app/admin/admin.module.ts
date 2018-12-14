import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {HomeComponent} from './home/home.component';

import {AdminRoutes} from './admin.routing';
import {SafeHtml} from '../shared/SafeHtml';
import {ArticleDetailsComponent} from './articles/article-details/article-details.component';
import {PanelAdminComponent} from "./articles/panel-admin/panel-admin.component";

@NgModule({
    imports: [
        RouterModule.forChild(AdminRoutes),
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TextareaAutosizeModule
    ],
    declarations: [
        HomeComponent,
        PanelAdminComponent,
        SafeHtml,
        ArticleDetailsComponent
    ],
    providers: [],
    exports: [SafeHtml],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
}
