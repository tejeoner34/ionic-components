import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.page.html',
    styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

    favourite: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    onClick(){
        this.favourite = !this.favourite
    }

}
