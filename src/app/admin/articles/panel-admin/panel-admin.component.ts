import {Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {UserService} from '../../../providers';
import {AuthenticationService} from '../../../providers';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../../../providers/alert.service";

@Component({
    selector: 'app-patients',
    templateUrl: './panel-admin.component.html',
    styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {
    form: FormGroup;
    form2: FormGroup;
    loading: boolean = false;
    @ViewChild('fileInput') fileInput: ElementRef;
    article: any = {
        title: '',
        introduction: '',
        content: '',
        type: '',
        img: '',
        admin_id: ''
    };
    result: any = {
        score_1: '',
        score_2: '',
        logo_1: '',
        logo_2: '',
        team1_name: '',
        team2_name: ''
    };
    user: any;

    constructor(private userService: UserService,
                private ngZone: NgZone,
                private fb: FormBuilder,
                private authenticationService: AuthenticationService,
                private alertService: AlertService,
                private router: Router) {
        this.user = this.authenticationService.getUser();
       this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            img: [null, Validators.required]
        });
        this.form2 = this.fb.group({
            logo_1: [null, Validators.required],
            logo_2: [null, Validators.required]
        });
    }

    onFileChange(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('img').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    }

    onFileChange1(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form2.get('logo_1').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                });
            };
        }
    }

    onFileChange2(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form2.get('logo_2').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                })
            };
        }
    }

    createArticle() {
        this.article.user_id = this.user.user.id;
        this.article.img = this.form.value.img.value;
        console.log(this.article)
            this.userService.createArticle(this.article).subscribe(
            article => {
                this.alertService.showNotification('success', 'New article created!');
                console.log(article)
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection..');
                console.log(error)
            }
        );
    }

    createResult() {
        this.result.logo_1 = this.form2.value.logo_1.value;
        this.result.logo_2 = this.form2.value.logo_2.value;
            this.userService.addResult(this.result).subscribe(
            article => {
                this.alertService.showNotification('success', 'New result created!');
            },
            error => {
                this.alertService.showNotification('warning', 'Please check your connection..');
                console.log(error)
            }
        );
    }
}
