import { State } from "./state";
import { Diagnosis, Entry, Patient } from "../types";

export type Action =
  | {
      type: "SET_DIAGNOSES_LIST";
      payload: Diagnosis[];
    }
  | {
      type: "SET_PATIENT_LIST";
      payload: Patient[];
    }
  | {
      type: "ADD_PATIENT";
      payload: Patient;
    }
  | {
      type: "UPDATE_PATIENT";
      payload: Patient;
    }
  | {
      type: "ADD_PATIENT_ENTRY";
      payload: { id: string; entry: Entry };
    };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_DIAGNOSES_LIST":
      return {
        ...state,
        diagnoses: {
          ...action.payload.reduce(
            (memo, diagnosis: Diagnosis) => ({
              ...memo,
              [diagnosis.code]: diagnosis,
            }),
            {}
          ),
          ...state.diagnoses,
        },
      };
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients,
        },
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload,
        },
      };
    case "UPDATE_PATIENT":
      return {
        ...state,
        patients: { ...state.patients, [action.payload.id]: action.payload },
      };
    case "ADD_PATIENT_ENTRY":
      const { id, entry } = action.payload;
      const editedPatient = state.patients[id];
      editedPatient.entries?.push(entry);
      return {
        ...state,
        patients: {
          ...state.patients,
          [id]: editedPatient,
        },
      };
    default:
      return state;
  }
};
export const setDiagnoses = (diagnoses: Diagnosis[]): Action => ({
  type: "SET_DIAGNOSES_LIST",
  payload: diagnoses,
});

export const setPatients = (patientList: Patient[]): Action => ({
  type: "SET_PATIENT_LIST",
  payload: patientList,
});

export const addPatient = (patient: Patient): Action => {
  return {
    type: "ADD_PATIENT",
    payload: patient,
  };
};
export const updatePatient = (patient: Patient): Action => {
  return {
    type: "UPDATE_PATIENT",
    payload: patient,
  };
};
export const addPatientEntry = (payload: {
  id: string;
  entry: Entry;
}): Action => {
  return {
    type: "ADD_PATIENT_ENTRY",
    payload,
  };
};
