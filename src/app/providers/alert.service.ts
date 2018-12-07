import {Injectable} from '@angular/core';

declare let $: any;

@Injectable()
export class AlertService {

    constructor() {}

    showNotification(type, message) {
        $.notify({
            icon: 'pe-7s-comment',
            message: '<b>' + message + '</b>'

        }, {
            type: type,
            timer: 2000,
            placement: {
                from: 'top',
                align: 'left'
            }
        });
    }

    alert(type, message) {
        this.showNotification(type, message);
    }
}
