import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

    constructor(public modalController: ModalController) { }

    ngOnInit() {
    }


    // para trabajar con una modal necesitamos pasarle 
    // tantos las props como recibir props del hijo a través de esta función
    async presentModal() {
        const modal = await this.modalController.create({
            component: ModalInfoPage,
            cssClass: 'my-custom-class',
            componentProps: {
                name: "Test",
                country: "Spain"
            }
        });
        await modal.present();


        // de esta manera obtenemos las props de la modal.
        // También nos sirve la función onDidDismiss().
        // La única diferencia es el momento de ejecución. Antes de que se empiece a cerrar la modal o después.
        const { data } = await modal.onWillDismiss();
        console.log(data)
    }

}
