import mongoose from 'mongoose'

export interface ICalculationBase {
    expression: string;
}

export interface ICalculation extends ICalculationBase {
  dateCreated: Date;
  result: number;
}

interface calculationModelInterface extends mongoose.Model<CalculationDoc> {
  build(attr: ICalculation): CalculationDoc;
}

interface CalculationDoc extends mongoose.Document, ICalculation { }

const calculationSchema = new mongoose.Schema({
  dateCreated: {
    type: Date,
    required: true
  },
  expression: {
    type: String,
    required: true
  },
  result: {
    type: Number, 
    required: true
  }
});

const Calculation = mongoose.model<CalculationDoc, calculationModelInterface>('Calculation', calculationSchema);

export { Calculation }