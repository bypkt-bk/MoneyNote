import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { LucideAngularModule, Calendar, User, CircleDotDashed, Ham, ShoppingCart, Car, PiggyBank } from 'lucide-angular';
import { CalendarComponent } from '../calendar/calendar.component';
@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [
    CommonModule, // Add CommonModule here
    LucideAngularModule,
    CalendarComponent,
  ],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})
export class AddButtonComponent {
  isPopoverVisible = false;
  readonly Calendar = Calendar;
  readonly User = User;
  readonly CircleDotDashed = CircleDotDashed;
  readonly Ham = Ham;
  readonly ShoppingCart = ShoppingCart;
  readonly Car = Car;
  readonly PiggyBank = PiggyBank;


  togglePopover() {
    this.isPopoverVisible = true;
  }

  toggleSave() {
    this.isPopoverVisible = false;
  }
  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    const isOutsideClick = !this.elRef.nativeElement.contains(target);
    if (isOutsideClick) {
      this.isPopoverVisible = false;
    }
  }

  constructor(private elRef: ElementRef) { }
}
