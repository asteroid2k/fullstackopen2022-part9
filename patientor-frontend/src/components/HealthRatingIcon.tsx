import { assertNever, HealthCheckRating } from "../types";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import FavoriteIcon from "@mui/icons-material/Favorite";

const HealthRatingIcon = ({ rating }: { rating: HealthCheckRating }) => {
  switch (rating) {
    case HealthCheckRating.CriticalRisk:
      return <HeartBrokenIcon htmlColor="red" />;
    case HealthCheckRating.HighRisk:
      return <FavoriteIcon htmlColor="red" />;
    case HealthCheckRating.LowRisk:
      return <FavoriteIcon htmlColor="yellow" />;
    case HealthCheckRating.Healthy:
      return <FavoriteIcon htmlColor="green" />;

    default:
      return assertNever(rating);
  }
};

export default HealthRatingIcon;
