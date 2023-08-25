import { Calculation, ICalculation, ICalculationBase } from "../models/calculation";
import { calc } from "../utils/calc";
import { HttpException } from "../utils/error-handler";

export const create = async (requestCalculation: ICalculationBase) => {
    const result = calc(requestCalculation.expression);
    const dateCreated = new Date();
    return Calculation.create({ dateCreated, result, expression: requestCalculation.expression });
};

export const find = async (limit: number) => {
    return await Calculation.find().limit(limit);
}

export const findById = async (id: string) => {
    try {
        return await Calculation.findById(id);
    } catch (error) {
        throw new HttpException(404, '');
    }
}

export const deleteOne = async (id: string) => {
    try {
        return await Calculation.deleteOne({ _id: id });
    } catch (error) {
        throw new HttpException(404, '');
    }
}