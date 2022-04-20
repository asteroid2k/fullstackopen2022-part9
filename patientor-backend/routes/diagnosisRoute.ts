import { Router } from "express";
import { getAll } from "../services/diagnosisService";

const router = Router();
router.get("/", (_req, res) => {
  const diagnoses = getAll();
  res.json(diagnoses);
});

export default router;
