import patientData from "../data/patient";
import { NewPatientEntry, NonSensitivePatient, Patient } from "../types";
import { nanoid } from "nanoid";
import { parseDate, parseGender, parseString } from "../util/parsers";

export const getAll = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

export const create = (patient: NewPatientEntry): Patient => {
  const id: string = nanoid();
  const newPatient = { ...patient, id };
  patientData.push(newPatient);
  return newPatient;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const toNewPatientEntry = (obj: any): NewPatientEntry => {
  const newPatient: NewPatientEntry = {
    name: parseString(obj.name, "name"),
    ssn: parseString(obj.ssn, "social security number"),
    dateOfBirth: parseDate(obj.dateOfBirth),
    gender: parseGender(obj.gender),
    occupation: parseString(obj.occupation, "occupation"),
  };
  return newPatient;
};
