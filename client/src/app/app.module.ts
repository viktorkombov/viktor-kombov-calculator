import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CalculatorService } from './services/calculator.service';
import { CalculatorModule } from './calculator/calculator.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CalculatorModule,
  ],
  providers: [
    CalculatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
