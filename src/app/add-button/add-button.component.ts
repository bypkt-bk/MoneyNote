import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { LucideAngularModule, Calendar, User, CircleDotDashed, Ham, ShoppingCart, Car, PiggyBank } from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-button',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    FormsModule,
  ],
  templateUrl: './add-button.component.html',
  styleUrl: './add-button.component.css'
})

export class AddButtonComponent {
  isPopoverVisible = false;
  Salary!: number;
  OtherIncome!: number;
  Food!: number;
  Shopping!: number;
  Transpot!: number;
  Saving!: number;
  OtherExpense!: number;
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
    const data = {
      Salary: this.Salary,
      OtherIncome: this.OtherIncome,
      Food: this.Food,
      Shopping: this.Shopping,
      Transpot: this.Transpot,
      Saving: this.Saving,
      OtherExpense: this.OtherExpense
    };
    const jsonData = JSON.stringify(data);
    console.log(jsonData);
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
