import patientData from "../data/patient";
import { NewPatientEntry, PublicPatient, Patient, Entry } from "../types";
import { nanoid } from "nanoid";
import {
  parseDate,
  parseGender,
  parseString,
  publicizePatient,
} from "../util/parsers";

export const getAll = (): PublicPatient[] => {
  return patientData.map((patient) => publicizePatient(patient));
};

export const getById = (patientId: string): Patient | undefined => {
  return patientData.find((patient) => patient.id === patientId);
};

export const create = (patient: NewPatientEntry): Patient => {
  const id: string = nanoid();
  const newPatient = { ...patient, id, entries: [] };
  patientData.push(newPatient);
  return newPatient;
};
export const addEntry = (patientId: string, entry: Entry): Entry => {
  const index = patientData.findIndex((p) => p.id === patientId);
  patientData[index].entries.push(entry);

  return entry;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const toNewPatientEntry = (obj: any): NewPatientEntry => {
  const newPatient: NewPatientEntry = {
    name: parseString(obj.name, "name"),
    ssn: parseString(obj.ssn, "social security number"),
    dateOfBirth: parseDate(obj.dateOfBirth),
    gender: parseGender(obj.gender),
    occupation: parseString(obj.occupation, "occupation"),
    entries: [],
  };
  return newPatient;
};
