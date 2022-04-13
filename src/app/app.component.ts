import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interface/interface';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent {

    menuData: Observable<Componente[]>;

    // añadimos el MenuController que nos permitirá trabajar con los diferentes metodos del menu.
    constructor(private dataService: DataService,
                private menu: MenuController) { }

    ngOnInit(){
        this.menuData = this.dataService.getMenuOpt();
    }

    onMenuClose(){
        this.menu.close();
    }
}
