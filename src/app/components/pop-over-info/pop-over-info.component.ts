import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-pop-over-info',
    templateUrl: './pop-over-info.component.html',
    styleUrls: ['./pop-over-info.component.scss'],
})
export class PopOverInfoComponent implements OnInit {

    data = new Array(20);

    constructor(private popoverController: PopoverController) { }

    ngOnInit() { }

    // para cerrar y enviar datos del popover haces como con la modal
    handlePopoverClose(value: number){
        this.popoverController.dismiss({
            item: value
        })
    }

}
