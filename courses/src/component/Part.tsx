import { assertNever, CoursePart } from "../types";

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  switch (coursePart.type) {
    case "normal":
      return (
        <div>
          <h3>
            {coursePart.name}: {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
        </div>
      );
    case "groupProject":
      return (
        <div>
          <h3>
            {coursePart.name}: {coursePart.exerciseCount}
          </h3>
          <p>groups: {coursePart.groupProjectCount}</p>
        </div>
      );
    case "submission":
      return (
        <div>
          <h3>
            {coursePart.name}: {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
          <span>
            Submit here{" "}
            <a href={coursePart.exerciseSubmissionLink}>
              {coursePart.exerciseSubmissionLink}
            </a>
          </span>
        </div>
      );
    case "special":
      return (
        <div>
          <h3>
            {coursePart.name}: {coursePart.exerciseCount}
          </h3>
          <p>{coursePart.description}</p>
          <span>requirements: {coursePart.requirements.join(", ")}</span>
        </div>
      );

    default:
      return assertNever(coursePart);
  }
};

export default Part;
