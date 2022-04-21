import { Router } from "express";
import {
  create,
  getAll,
  getById,
  toNewPatientEntry,
} from "../services/patientService";

const router = Router();

router.get("/", (_req, res) => {
  const patients = getAll();
  res.json(patients);
});

router.get("/:id", (req, res) => {
  const patient = getById(req.params.id);
  if (!patient) {
    res.status(404).json({ error: "Patient not found" });
    return;
  }
  res.json(patient);
});

router.post("/", (req, res) => {
  const newPatient = toNewPatientEntry(req.body);
  const saved = create(newPatient);
  res.json(saved);
});

export default router;
