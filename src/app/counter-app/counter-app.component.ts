import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-counter-app',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css',
})
export class CounterAppComponent {
  private initialValue: any = 1;
  // public myCounter: number | null | undefined;
  public myCounter = 0;

  inputControls = new FormControl<number>(this.initialValue);

  formGroup = new FormGroup({
    lumpSumValue: new FormControl<number>(1),
  });

  constructor() {} // Mainly used for Dependency Injection

  ngOnInit() {
    // Principal Logic :)
    this.inputControls.valueChanges.subscribe((val) => this.valueChange(val));
  }

  public lumpSumAmount() {
    this.initialValue = this.formGroup.get('lumpSumValue')?.value;
    this.myCounter = this.initialValue;
  }

  public valueChange(value: number | null) {
    if (!value || value < 1) {
      this.initialValue = 1;
    } else {
      this.initialValue = value;
    }

    // Handling null or Zero in input controls
    if (this.inputControls.value !== this.initialValue) {
      this.inputControls.setValue(this.initialValue);
    }
  }

  public increaseValue(): void {
    this.myCounter += this.initialValue;
  }

  public decreaseValue() {
    if (this.myCounter < 1) {
      this.myCounter = 0;
      return;
    }
    this.myCounter -= this.initialValue;
  }

  public reset() {
    this.myCounter = 0;
  }
}
