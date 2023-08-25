import { NextFunction, Request, Response } from "express";

export class HttpException extends Error {
    public status: number;
    public message: string;
    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.message = message;
    }
}

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpException) {
        switch (err.status) {
            case 400:
                res.status(400)
                    .json({ message: 'Bad request!' });
                break;
            case 404:
                res.status(404)
                .json({ message: 'Item is not found!' })
                break;
        }
    } else {
        res.status(500)
            .json({ message: 'Something went wrong!' })
    }
}
