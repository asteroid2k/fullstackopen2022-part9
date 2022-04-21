export enum Gender {
  Male = "male",
  Female = "female",
}
export type NewPatientEntry = Omit<Patient, "id">;
export type PublicPatient = Omit<Patient, "ssn" | "entries">;

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}
