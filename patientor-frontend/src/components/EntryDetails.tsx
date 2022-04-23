import { Typography } from "@mui/material";
import { useStateValue } from "../state";
import { assertNever, Entry } from "../types";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import HealingIcon from "@mui/icons-material/Healing";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealthRatingIcon from "./HealthRatingIcon";

const EntryDetails = ({ entry }: { entry: Entry }) => {
  const [{ diagnoses }] = useStateValue();
  switch (entry.type) {
    case "Hospital":
      return (
        <div className="entry-details">
          <div className="top">
            <span>[{entry.date}] </span>{" "}
            <span>
              <HealingIcon htmlColor="gray" />
            </span>
          </div>
          <Typography style={{ fontWeight: 600, fontSize: "1.15rem" }}>
            {entry.description}
          </Typography>
          <Typography>
            <span className="field">Specialist:</span> {entry.specialist}
          </Typography>
          {entry.diagnosisCodes && (
            <div>
              <p className="field">Diagnoses</p>{" "}
              <ul>
                {entry.diagnosisCodes.map((code) => (
                  <li key={code}>
                    {code} {diagnoses[code]?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {entry.discharge && (
            <div>
              <p className="field">Discharge</p>
              <p>
                {entry.discharge.criteria} [{entry.discharge.date}]
              </p>
            </div>
          )}
        </div>
      );
    case "HealthCheck":
      return (
        <div className="entry-details">
          <div className="top">
            <span>[{entry.date}] </span>{" "}
            <span>
              <HealthAndSafetyIcon htmlColor="gray" />
            </span>
          </div>
          <Typography style={{ fontWeight: 600, fontSize: "1.15rem" }}>
            {entry.description}
          </Typography>
          <Typography>
            <span className="field">Specialist:</span> {entry.specialist}
          </Typography>
          {entry.diagnosisCodes && (
            <div>
              <p className="field">Diagnoses</p>{" "}
              <ul>
                {entry.diagnosisCodes.map((code) => (
                  <li key={code}>
                    {code} {diagnoses[code]?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <span className="field">Health Rating: </span>
            <span>
              <HealthRatingIcon rating={entry.healthCheckRating} />
            </span>
          </div>
        </div>
      );
    case "OccupationalHealthcare":
      return (
        <div className="entry-details">
          <div className="top">
            <span>[{entry.date}] </span>{" "}
            <span>
              <MedicalServicesIcon htmlColor="gray" />
            </span>
          </div>
          <Typography style={{ fontWeight: 600, fontSize: "1.15rem" }}>
            [{entry.date}] {entry.description}
          </Typography>
          <Typography>
            <span className="field">Specialist:</span> {entry.specialist}
          </Typography>
          <Typography>Employer: {entry.employerName}</Typography>
          {entry.diagnosisCodes && (
            <div>
              <p className="field">Diagnoses</p>{" "}
              <ul>
                {entry.diagnosisCodes.map((code) => (
                  <li key={code}>
                    {code} {diagnoses[code]?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {entry.sickLeave && (
            <div>
              <p className="field">Sick leave</p>
              <p>
                {entry.sickLeave.startDate} - {entry.sickLeave.endDate}
              </p>
            </div>
          )}
        </div>
      );

    default:
      return assertNever(entry);
  }
};

export default EntryDetails;
