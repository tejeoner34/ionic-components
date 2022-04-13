import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }

    getMenuOpt(){
        return this.http.get<Componente[]>('/assets/data/data-menu.json')
    }
}
