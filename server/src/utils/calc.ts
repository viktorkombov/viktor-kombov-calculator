import { HttpException } from "./error-handler";

export const calc = (expression: any) => {
    try {
        return eval(expression);
    } catch (error) {
        throw new HttpException(400, '');
    }
}