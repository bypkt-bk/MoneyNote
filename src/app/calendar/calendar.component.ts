import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  selectedMonth = new Date().getMonth();
  selectedYear = new Date().getFullYear();
  dates: number[] = [];
  yearRange: number[] = [];

  ngOnInit() {
    this.generateYearRange();
    this.updateCalendar();
  }

  generateYearRange() {
    const currentYear = new Date().getFullYear();
    this.yearRange = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);
  }

  updateCalendar() {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
    this.dates = Array(firstDay).fill(null).concat([...Array(daysInMonth).keys()].map(d => d + 1));
  }
}