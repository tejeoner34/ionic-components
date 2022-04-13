import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.page.html',
    styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

    users: any[] = [];

    constructor(private getUsers: DataService) { }

    ngOnInit() {
        this.getUsers.getUsers().subscribe((res:any) => this.users = this.users.concat(res))
    }

    onDelete(user){
        const indexToDelete = this.users.findIndex(u => u.id === user.id);
        this.users.splice(indexToDelete, 1);
        const newUsers = [...this.users];
        this.users = newUsers
    }

}
