import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.page.html',
    styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

    albums: any[] = [];
    albumsFiltered: any[] = [];
    inputValue = '';

    constructor(private http: DataService) { }

    ngOnInit() {
        this.http.getAlbums().subscribe(res => {
            this.albums = res;
            this.albumsFiltered = res;
        })
    }

    onFilter(event) {
        const inputValue = event.detail.value.toLowerCase();
        this.inputValue = inputValue;
    }

}
