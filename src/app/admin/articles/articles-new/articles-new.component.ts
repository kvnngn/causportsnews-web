import {Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {UserService} from '../../../providers';
import {AuthenticationService} from '../../../providers';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-patients',
    templateUrl: './articles-new.component.html',
    styleUrls: ['./articles-new.component.css']
})
export class ArticlesNewComponent {
    form: FormGroup;
    loading: boolean = false;
    @ViewChild('fileInput') fileInput: ElementRef;
    article: any = {
        title: '',
        introduction: '',
        content: '',
        type: '',
        img: '',
    };

    constructor(private userService: UserService,
                private ngZone: NgZone,
                private fb: FormBuilder,
                private authentificationService: AuthenticationService,
                private router: Router) {
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            img: [null, Validators.required]
        });
    }

    onFileChange(event) {
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('img').setValue({
                    filename: file.name,
                    filetype: file.type,
                    value: reader.result.split(',')[1]
                })
            };
        }
    }

    createArticle() {
        console.log(this.form.value.img.value)
        this.article.img = this.form.value.img.value;
        this.userService.createArticle(this.article).subscribe(
            article => {
                console.log(article)
            },
            error => {
                console.log(error)
            }
        );
    }
}
