export interface ICalculationBase {
  expression: string;
}

export interface ICalculation extends ICalculationBase {
  _id: string;
  dateCreated: Date;
  result: number;
  __v: number;
}
