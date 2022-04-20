import express from "express";
import { bmiCalculator, calculateExercises } from "./helpers/calculators";
import { validateBmiQuery, validateExerciseQuery } from "./middleware";
const app = express();

app.use(express.json());

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.get("/bmi", validateBmiQuery, (req, res) => {
  const { height, weight } = req.query;
  const bmi = bmiCalculator(Number(height), Number(weight));

  res.json({ height, weight, bmi });
});

app.post("/exercises", validateExerciseQuery, (req, res) => {
  const { target, daily_exercises } = req.body;
  const result = calculateExercises(daily_exercises, Number(target));

  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
