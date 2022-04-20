import { calculateExercises } from "./helpers/calculators";

const parseArgz = () => {
  const argz = process.argv.slice(2);
  if (argz.length < 2) {
    console.log("ERROR:Not enough arguments");
    process.exit(-1);
  }
  let [target, ...hours] = process.argv.slice(2);
  return { target: Number(target), hours: hours.map((h) => Number(h)) };
};

const main = () => {
  const { target, hours } = parseArgz();
  const result = calculateExercises(hours, target);
  console.log(result);
};
main();
