import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddButtonComponent } from "../add-button/add-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.css'],
  standalone: true,
  imports: [AddButtonComponent,CommonModule]
})
export class DateDetailComponent implements OnInit {
  year!: number;
  month!: string;
  day!: number;
  data: { [key: string]: any } = {};

  constructor(private route: ActivatedRoute) {}
  handleData(receivedData: JSON) {
    // Parse JSON if receivedData is a JSON string, otherwise, assign it directly
    try {
      this.data = typeof receivedData === 'string' ? JSON.parse(receivedData) : receivedData;
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
    console.log(this.data);
  }

  // Helper function to get entries for *ngFor
  getObjectKeys(data: { [key: string]: any }) {
    return Object.entries(data).map(([key, value]) => ({ key, value }));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = parseInt(params.get('year')!, 10);
      this.month = params.get('month')!;
      this.day = parseInt(params.get('day')!, 10);
    });
  }

  goBack() {
    window.history.back()
  }
}
