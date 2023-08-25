import express from "express";
import { deleteCalculation, getCalculationById, getCalculations, postCalculation } from "../controllers/calculations.controller";

export const calculationsRouter = express.Router();
calculationsRouter.get('/', getCalculations);
calculationsRouter.get('/:calculationId', getCalculationById);
calculationsRouter.post('/', postCalculation);
calculationsRouter.delete('/:calculationId', deleteCalculation)
