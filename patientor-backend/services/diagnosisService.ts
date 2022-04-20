import { diagnosisData } from "../data/diagnoses";
import { Diagnosis } from "../types";

export const getAll = (): Diagnosis[] => {
  return diagnosisData;
};
