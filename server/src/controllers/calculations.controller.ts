import { NextFunction, Request, RequestHandler, Response } from "express"
import * as CalculationService from "../services/calculations.service";

export const postCalculation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const requestCalculation = req.body;
        const newCalculation = await CalculationService.create(requestCalculation);
        res.status(201).send(newCalculation);
    } catch (e: any) {
        next(e);
    }
}

export const getCalculations: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const limit = req.query.limit ? +req.query.limit : 0;
        const calculations = await CalculationService.find(limit);
        res.status(200).send(calculations);
    } catch (e: any) {
        next(e);
    }
}

export const getCalculationById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { calculationId } = req.params;
        const calc = await CalculationService.findById(calculationId);
        res.status(200).send(calc);
    } catch (e: any) {
        next(e);
    }
}

export const deleteCalculation: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { calculationId } = req.params;
        const calc = await CalculationService.deleteOne(calculationId);
        res.status(200).send(calc);
    } catch (e: any) {
        next(e);
    }
}