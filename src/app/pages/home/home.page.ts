import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interface/interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Componente[]>

  constructor(private menuDataService: DataService) { }

  ngOnInit() {
      this.components = this.menuDataService.getMenuOpt();
  }

}
