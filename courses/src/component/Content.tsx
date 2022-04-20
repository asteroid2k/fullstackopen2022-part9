import { CoursePart } from "../types";
import Part from "./Part";

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <div className="parts">
      {courseParts.map((part) => (
        <Part key={part.name} coursePart={part} />
      ))}
    </div>
  );
};

export default Content;