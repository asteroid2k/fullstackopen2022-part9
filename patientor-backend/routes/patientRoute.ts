import { Router } from "express";
import { create, getAll, toNewPatientEntry } from "../services/patientService";

const router = Router();

router.get("/", (_req, res) => {
  const patients = getAll();
  res.json(patients);
});

router.post("/", (req, res) => {
  const newPatient = toNewPatientEntry(req.body);
  const saved = create(newPatient);
  res.json(saved);
});

export default router;
