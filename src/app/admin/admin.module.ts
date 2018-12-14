import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {HomeComponent} from './home/home.component';

import {AdminRoutes} from './admin.routing';
import {ArticlesEditComponent} from "./articles/articles-edit/articles-edit.component";
import {ArticlesNewComponent} from "./articles/articles-new/articles-new.component";
import {SafeHtml} from "../shared/SafeHtml";

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
        ArticlesEditComponent,
        ArticlesNewComponent,
        SafeHtml
    ],
    providers: [],
    exports: [SafeHtml],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
}
