import {Component, OnInit} from '@angular/core';
import {ErrorComponent} from '../error/error.component';

declare let $: any;

@Component({
    selector: 'notFound-component',
    templateUrl: './404.component.html',
    styleUrls: ['./404.component.css']
})
export class NotFoundComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {}

}
