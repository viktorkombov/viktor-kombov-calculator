import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInterceptorProvider } from './app.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    appInterceptorProvider,
  ]
})
export class CoreModule { }
