import { nanoid } from "nanoid";
import {
  EntryType,
  Entry,
  Gender,
  PublicPatient,
  HealthCheckRating,
} from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};
const isEntryType = (param: any): param is EntryType => {
  return Object.values(EntryType).includes(param);
};
const isHealthRating = (param: any): param is HealthCheckRating => {
  return Object.values(HealthCheckRating).includes(param);
};

export const parseString = (str: unknown, field: string): string => {
  if (!str || !isString(str)) {
    throw new Error(`Incorrect or missing ${field}`);
  }

  return str;
};

export const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

export const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Incorrect or missing gender: " + gender);
  }
  return gender;
};

export const parseEntryType = (type: unknown): EntryType => {
  if (!type || !isEntryType(type)) {
    throw new Error("Incorrect or missing entry type: " + type);
  }
  return type;
};

export const parseHealthRating = (rating: unknown): HealthCheckRating => {
  if (rating === undefined || !isHealthRating(rating)) {
    throw new Error("Incorrect or missing health check rating: " + rating);
  }
  return rating;
};

export const parseEntry = (entry: any): Entry => {
  if (!entry) {
    throw new Error("Incorrect or missing entry fields");
  }
  if (entry.type === "HealthCheck") {
    entry.healthCheckRating = parseHealthRating(entry.healthCheckRating);
  } else if (entry.type === "OccupationalHealthcare") {
    entry.employerName = parseString(entry.employerName, "Employer Name");
  }
  const newEntry: Entry = {
    ...entry,
    id: nanoid(),
    type: parseEntryType(entry.type),
    specialist: parseString(entry.specialist, "Specialist"),
    date: parseDate(entry.date),
    description: parseString(entry.description, "Description"),
  };
  return newEntry;
};

export const publicizePatient = ({
  id,
  name,
  dateOfBirth,
  gender,
  occupation,
}: PublicPatient): PublicPatient => {
  return { id, name, dateOfBirth, gender, occupation };
};
