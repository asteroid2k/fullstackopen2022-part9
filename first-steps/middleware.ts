import { NextFunction, Request, Response } from "express";

export const validateBmiQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { height, weight } = req.query;
  if (isNaN(Number(height) + Number(weight))) {
    res.json({ error: "malformatted parameters" });
    return;
  }
  next();
};

export const validateExerciseQuery = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { target, daily_exercises } = req.body;
  if (!(target || daily_exercises)) {
    res.json({ error: "missing parameters" });
    return;
  }
  const invalidHours =
    daily_exercises.length < 1 ||
    isNaN(
      daily_exercises.reduce(
        (sum: number, curr: number) => (sum += Number(curr)),
        0
      )
    );

  if (isNaN(Number(target)) || invalidHours) {
    res.json({ error: "malformatted parameters" });
    return;
  }
  next();
};
