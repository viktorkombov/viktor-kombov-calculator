import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { BehaviorSubject } from 'rxjs';
import { ICalculation } from '../models/request-calculation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  calculations$ = new BehaviorSubject<ICalculation[]>([]);
  public inputValue = '';
  public isLoading = false;
  public error = '';
  public perPage = 5;
  public calculationsOpen = false;

  public buttons = [
    { value: '*', displayValue: 'X', class: 'operator' },
    { value: '/', displayValue: '/', class: 'operator' },
    { value: 'C', displayValue: 'C', class: 'operator' },
    { value: 'backspace', displayValue: '\u232b', class: 'operator' },
    { value: '1', displayValue: '1', class: 'number one' },
    { value: '2', displayValue: '2', class: 'number' },
    { value: '3', displayValue: '3', class: 'number' },
    { value: '+', displayValue: '+', class: 'operator' },
    { value: '4', displayValue: '4', class: 'number' },
    { value: '5', displayValue: '5', class: 'number' },
    { value: '6', displayValue: '6', class: 'number' },
    { value: '-', displayValue: '-', class: 'operator' },
    { value: '7', displayValue: '7', class: 'number' },
    { value: '8', displayValue: '8', class: 'number' },
    { value: '9', displayValue: '9', class: 'number' },
    { value: '.', displayValue: ',', class: 'operator' },
    { value: 'plus-minus', displayValue: '+/-', class: 'operator' },
    { value: '0', displayValue: '0', class: 'number' },
    { value: 'submit', displayValue: '=', class: 'operator submit' },
  ]

  constructor(private calculatorService: CalculatorService) { }

  public onButtonClick(value: string) {
    this.inputValue = String(this.inputValue);
    const operatorsRegex = /[\/\+\-\*]/g;
    switch (value) {
      case 'submit':
        if (this.inputValue.at(-1) && this.inputValue.at(-1)?.match(operatorsRegex)) {
          this.inputValue = this.inputValue.slice(0, -1);
        }
        if (!this.inputValue || !operatorsRegex.test(this.inputValue)) {
          return;
        }
        this.calculate();
        return;
      case 'C':
        this.inputValue = '';
        return;
      case 'backspace':
        this.inputValue = this.inputValue.slice(0, -1);
        return;
      case 'plus-minus':
        const toNumber = Number(this.inputValue)
        if (!isNaN(toNumber)) {
          this.inputValue = String(-(toNumber));
        }
        return;
      case '*':
      case '/':
      case '+':
      case '-':
      case '0':
        if (!this.inputValue) {
          return;
        }
        if (operatorsRegex.test(this.inputValue.slice(-1))) {
          if (value !== '0') {
            this.inputValue = this.inputValue.slice(0, -1);
          }
          return;
        }
        break;
      case '.':
        const terms = this.inputValue.split(operatorsRegex);
        if (terms.at(-1)?.includes('.') || this.inputValue.at(-1)?.match(operatorsRegex)) {
          return;
        }
        break;
      default:
        if (this.inputValue.length === 1 && this.inputValue === '0') {
          this.inputValue = '';
        }
    }
    this.inputValue += value;
  }

  public calculationDeleted(id: string) {
    this.calculatorService.deleteCalculation(id).subscribe({
      next: (value: any) => {
        const deletedItemIndex = this.calculations$.value.findIndex(c => c._id === id);
        this.calculations$.next([...this.calculations$.value.slice(0, deletedItemIndex), ...this.calculations$.value.slice(deletedItemIndex + 1)])
      },
      error: (err) => {
        this.error = `Error: ${err.status} - ${err.statusText}`;
      }
    });
  }

  public editCalculation(id: string) {
    this.calculatorService.getCalculationById(id).subscribe(calculation => this.inputValue = calculation.expression);
  }

  public openCalculations() {
    this.isLoading = true;
    this.calculatorService.getExpressions(this.perPage).subscribe((data: ICalculation[]) => {
      this.calculations$.next(data);
      this.calculationsOpen = true;
      this.isLoading = false;
    });
  }

  private calculate() {
    this.isLoading = true;
    this.calculatorService.createCalculation(this.inputValue)
      .subscribe({
        next: (value: any) => {
          this.inputValue = value.result
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          this.error = `Error: ${err.status} - ${err.statusText}`;
        }
      });
  }
}
