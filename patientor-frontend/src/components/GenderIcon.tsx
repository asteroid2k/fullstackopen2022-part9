import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import AttributionIcon from "@mui/icons-material/Attribution";
import { Gender } from "../types";

const GenderIcon = ({ gender }: { gender: Gender }) => {
  switch (gender) {
    case Gender.Female:
      return <FemaleIcon fontSize="large" htmlColor="pink" />;
    case Gender.Male:
      return <MaleIcon fontSize="large" htmlColor="darkblue" />;
    default:
      return <AttributionIcon fontSize="large" />;
  }
};

export default GenderIcon;
