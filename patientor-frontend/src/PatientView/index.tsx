import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../constants";
import { updatePatient, useStateValue } from "../state";
import { Entry, Patient } from "../types";

import { Avatar, Container, Stack, Typography } from "@mui/material";
import GenderIcon from "../components/GenderIcon";
import EntryDetails from "../components/EntryDetails";

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
      <Container maxWidth="md" sx={{ margin: "1rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <Avatar
            sx={{ width: 80, height: 80, margin: "1rem auto" }}
            src={`https://avatars.dicebear.com/api/initials/${patientDetails.name}.svg`}
          />
          <Typography variant="h4">
            {patientDetails.name}
            <GenderIcon gender={patientDetails.gender} />
          </Typography>

          <Typography>SSN: {patientDetails.ssn}</Typography>
          <Typography>Occupation: {patientDetails.occupation}</Typography>
        </div>

        <Typography variant="h5" mt={2}>
          Entries
        </Typography>
        <Stack spacing={2}>
          {patientDetails?.entries?.length ? (
            patientDetails.entries.map((entry: Entry) => (
              <EntryDetails entry={entry} key={entry.id} />
            ))
          ) : (
            <p>No entries..</p>
          )}
        </Stack>
      </Container>
    </div>
  );
};
export default PatientView;
