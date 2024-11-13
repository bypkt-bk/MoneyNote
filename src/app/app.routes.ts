// app.routes.ts
import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { DateDetailComponent } from './date-detail/date-detail.component';

export const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'date/:year/:month/:day', component: DateDetailComponent },
];
