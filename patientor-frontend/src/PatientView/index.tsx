import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { updatePatient, useStateValue } from "../state";
import { Patient } from "../types";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const PatientView = ({ patient }: { patient: Patient | null }) => {
  const [, dispatch] = useStateValue();

  const { id = "" } = useParams<{ id: string }>();
  const [err, setErr] = useState<string | null>(null);
  const [patientDetails, setPatient] = useState<Patient | null>(patient);

  const fetchPatient = async () => {
    try {
      const { data: patient } = await axios.get<Patient>(
        `${apiBaseUrl}/patients/${id || ""}`
      );
      patient;
      setPatient(patient);
      dispatch(updatePatient(patient));
    } catch (e) {
      if (e.response?.status === 404) {
        setErr("Patient not Found");
      }
      console.error(e);
    }
  };

  useEffect(() => {
    if (!patientDetails?.ssn) {
      void fetchPatient();
    }
  }, []);

  if (!patientDetails) {
    return (
      <div>
        <h3>{err}</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>
        {patientDetails.name}{" "}
        {patientDetails.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
      </h3>
      <p>SSN: {patientDetails.ssn}</p>
      <p>Occupation: {patientDetails.occupation}</p>
    </div>
  );
};
export default PatientView;
