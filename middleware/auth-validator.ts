import {check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export let validatorParams = [
    check('email').isEmail(),
    check('password').isLength({ min: 8, max: 15})
];

export function validator(req : Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

      return res.status(422).json({ errors: errors.array() });
    }
    next();
};

module.exports = {
    validatorParams,
    validator
  }