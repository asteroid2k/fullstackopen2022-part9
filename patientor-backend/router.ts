import { Router } from "express";
import diagnosisRouter from "./routes/diagnosisRoute";
import patientRouter from "./routes/patientRoute";

const router = Router();

router.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

router.use("/diagnoses", diagnosisRouter);

router.use("/patients", patientRouter);

export default router;
