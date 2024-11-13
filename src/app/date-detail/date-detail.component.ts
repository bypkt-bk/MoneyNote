import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-date-detail',
  templateUrl: './date-detail.component.html',
  styleUrls: ['./date-detail.component.css']
})
export class DateDetailComponent implements OnInit {
  year!: number;
  month!: string;
  day!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = parseInt(params.get('year')!);
      this.month = params.get('month')!;
      this.day = parseInt(params.get('day')!);
  });
}

  goBack(){
    window.history.back()
  }
}
