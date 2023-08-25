import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CalculationsComponent } from './calculations/calculations.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    CalculationsComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
