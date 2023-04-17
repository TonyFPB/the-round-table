import { ObjectSchema } from "joi"
import { Request, Response, NextFunction } from "express"
import httpStatus from "http-status";

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const validate = schema.validate(req.body, { abortEarly: false });
    
    if(validate.error) {
      res.status(httpStatus.BAD_REQUEST).send(validate.error.details.map((d) => d.message));
      return;
    }else {
      req.body = validate.value;
      next();
    } 
  }
}