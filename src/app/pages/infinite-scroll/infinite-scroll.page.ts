import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-infinite-scroll',
    templateUrl: './infinite-scroll.page.html',
    styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    data = new Array(20);

    constructor() { }

    ngOnInit() {
    }

    loadData(){

        if(this.data.length >= 60){
            this.infiniteScroll.complete();
            this.infiniteScroll.disabled = true;
            return
        }

        const newArray = new Array(20);

        setTimeout(()=>{
            this.infiniteScroll.complete();
            this.data.push(...newArray);
        }, 3000);
    }

}
