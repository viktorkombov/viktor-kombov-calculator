import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICalculation } from '../models/request-calculation';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public createCalculation(expression: string) {
    return this.http.post('/calculations', { expression });
  }

  public getExpressions(limit: number): Observable<ICalculation[]> {
    return this.http.get<ICalculation[]>('/calculations');
  }

  public deleteCalculation(id: string) {
    return this.http.delete(`/calculations/${id}`);
  }

  public getCalculationById(id: string) {
    return this.http.get<ICalculation>(`/calculations/${id}`);
  }
}
