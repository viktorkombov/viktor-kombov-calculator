import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICalculation } from 'src/app/models/request-calculation';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss']
})
export class CalculationsComponent {
  @Input() public data!: ICalculation[] | null;
  @Output() public deleteCalculation = new EventEmitter<string>();
  @Output() public closeCalculations = new EventEmitter();
  @Output() public editCalculation = new EventEmitter<string>();

  public onDeleteButtonClick(event: Event, id: string) {
    event.stopPropagation();
    this.deleteCalculation.emit(id);
  }
}
