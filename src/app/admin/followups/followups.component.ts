import {Component, OnInit, NgZone} from '@angular/core';
import {AuthenticationService, ProService} from '../../providers';

@Component({
    selector: 'app-reports',
    templateUrl: './followups.component.html',
    styleUrls: ['./followups.component.css']
})
export class FollowupsComponent implements OnInit {

    followups: any = [];
    user;

    constructor(private proService: ProService,
                private authentificationService: AuthenticationService,
                private ngZone: NgZone) {
        this.user = this.authentificationService.getUser();
    }

    ngOnInit() {
         this.getFollowUps();
    }

    getFollowUps() {
        this.proService.getFollowUps(this.user.pro.id).subscribe(
            followups => {
                this.ngZone.run(() => {
                    console.log(followups); this.followups = followups;});
            },
            error => {
                console.log(error);
            }
        );
    }
}
