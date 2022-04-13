import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

    data = ['Harry Potter', "Hermione Granger", "Ron Weasley", "Draco Malfoy"]

    isToggle = false;




    constructor() { }

    ngOnInit() {
    }


    // method used to handle the drag event
    doReorder(event){

        //updated data array to be the same as the interface order
        const movedItem = this.data.splice(event.detail.from, 1)[0];
        this.data.splice(event.detail.to, 0, movedItem);
        event.detail.complete()

    }

    handleToggle(){
        this.isToggle = !this.isToggle
    }

}
