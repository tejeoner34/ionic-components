import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {


    // We create this property so we can play with the loader.
    loading: HTMLIonLoadingElement;

    constructor(private loadingController: LoadingController) { }

    ngOnInit() {
    }

    onShowLoader() {
        this.presentLoading("Loading");

        setTimeout(()=>{
            this.loading.dismiss();
        }, 5000)
    }

    async presentLoading(message) {
        this.loading = await this.loadingController.create({
            message,
        });
        await this.loading.present();
    }

}
