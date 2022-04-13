import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interface/interface';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    getUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }

    getAlbums(){
        return this.http.get<any[]>("https://jsonplaceholder.typicode.com/albums")
    }

    getMenuOpt(){
        return this.http.get<Componente[]>('/assets/data/data-menu.json')
    }

    getSuperHeroes(){
        return this.http.get<any[]>('/assets/data/superheroes.json')
                .pipe(delay(3000)) 
    }
}
