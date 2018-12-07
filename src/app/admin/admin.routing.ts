import {Routes} from '@angular/router';
import {FollowupsNewComponent} from './followups/followups-new/followups-new.component';
import {FollowupsComponent} from './followups/followups.component';
import {HomeComponent} from './home/home.component';
import {PatientsEditComponent} from './patients/patients-edit/patients-edit.component';
import {PatientsComponent} from './patients/patients.component';
import {PatientsNewComponent} from './patients/patients-new/patients-new.component';
import {ReportsNewComponent} from './reports/reports-new/reports-new.component';
import {ReportsComponent} from './reports/reports.component';
import {SettingsComponent} from './settings/settings.component';

export const AdminRoutes: Routes = [
        {
            path: 'home',
            component: HomeComponent
        },
        {
            path: 'patients',
            component: PatientsComponent
        },
        {
            path: 'patients/new',
            component: PatientsNewComponent
        },
        {
            path: 'patients/edit/:id',
            component: PatientsEditComponent
        },
        {
            path: 'reports',
            component:
            ReportsComponent
        }
        , {
            path: 'reports/new',
            component:
            ReportsNewComponent
        }
        , {
            path: 'followups',
            component:
            FollowupsComponent
        }
        , {
            path: 'followups/new',
            component:
            FollowupsNewComponent
        }
        ,
        {
            path: 'settings',
            component:
            SettingsComponent
        }
    ]
;
