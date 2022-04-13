import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-segments',
    templateUrl: './segments.page.html',
    styleUrls: ['./segments.page.scss'],
})
export class SegmentsPage implements OnInit {

    characters: Observable<any[]>;
    publisherName: string = "";

    constructor(private http: DataService) { }

    ngOnInit() {

        this.characters = this.http.getSuperHeroes();

    }

    segmentChanged(event) {
        if(event.detail.value === "all") return this.publisherName = "";
        this.publisherName = event.detail.value;
    }

}
