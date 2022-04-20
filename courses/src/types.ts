interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}
interface CourseInfoPart extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CourseInfoPart {
  type: "normal";
}
interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CourseInfoPart {
  type: "submission";
  exerciseSubmissionLink: string;
}
interface CourseSpecialPart extends CourseInfoPart {
  type: "special";
  requirements: string[];
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseSpecialPart;

export const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
