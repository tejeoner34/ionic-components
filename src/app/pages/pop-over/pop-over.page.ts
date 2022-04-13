import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverInfoComponent } from '../../components/pop-over-info/pop-over-info.component';

@Component({
    selector: 'app-pop-over',
    templateUrl: './pop-over.page.html',
    styleUrls: ['./pop-over.page.scss'],
})
export class PopOverPage implements OnInit {

    constructor(private popOverController: PopoverController) { }

    ngOnInit() {
    }

    // el manejo del popover se hace igual que con la modal
    async presentPopover(ev: any) {
        const popover = await this.popOverController.create({
            component: PopOverInfoComponent,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true,
            backdropDismiss: false // nos sirve para evitar que se cierre el popover pinchando fuera de él
        });
        await popover.present();

        const res = await popover.onWillDismiss();
        console.log(res)
    }

}
