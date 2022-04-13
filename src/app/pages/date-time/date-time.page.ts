import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.page.html',
    styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    currentDate: Date = new Date();
    currentDay: number;
    currentMonth: number;
    currentYear: number;
    formatedDate = "";

    isCalendarVisible = false;



    constructor() { 
        this.currentDay = this.currentDate.getDate();
        this.currentMonth = this.currentDate.getMonth() + 1;
        this.currentYear = this.currentDate.getFullYear();
        this.formatedDate = `${this.currentDay}/${this.currentMonth}/${this.currentYear}`
        console.log(this.currentMonth)
    }

    ngOnInit() {
    }


    updateSelectedDate(event){
       const newDate = new Date(event.detail.value);
       this.formatedDate = `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    }

    updateVisibility(){
        this.isCalendarVisible = !this.isCalendarVisible;
    }

}
