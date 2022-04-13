import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-info',
    templateUrl: './modal-info.page.html',
    styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

    @Input() name: string;
    @Input() country: string;

    constructor(private modalController: ModalController) { }

    ngOnInit() {
    }

    closeModalNoArguments() {
        this.modalController.dismiss();
    }

    closeModalWithArguments(){

        // le pasamos props al padre dentro del dismiss
        this.modalController.dismiss({
            name: "Argumentos from modal"
        })
    }

}
