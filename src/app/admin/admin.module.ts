import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TextareaAutosizeModule} from 'ngx-textarea-autosize';
import {FollowupsNewComponent} from './followups/followups-new/followups-new.component';
import {FollowupsComponent} from './followups/followups.component';
import {HomeComponent} from './home/home.component';
import {PatientsEditComponent} from './patients/patients-edit/patients-edit.component';
import {PatientsComponent} from './patients/patients.component';
import {ReportsNewComponent} from './reports/reports-new/reports-new.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';
import {AdminRoutes} from './admin.routing';
import {PatientsNewComponent} from './patients/patients-new/patients-new.component';

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
        PatientsComponent,
        PatientsNewComponent,
        ReportsComponent,
        SettingsComponent,
        FollowupsComponent,
        PatientsEditComponent,
        FollowupsNewComponent,
        ReportsNewComponent,
    ],
    providers: [],
    exports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AdminModule {
}
