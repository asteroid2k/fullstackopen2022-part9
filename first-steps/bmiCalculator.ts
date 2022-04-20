import { bmiCalculator } from "./helpers/calculators";

const parseArgc = () => {
  const argz = process.argv.slice(2);
  if (argz.length < 2) {
    console.log("ERROR:Not enough arguments");
    process.exit(-1);
  }
  let [height, weight] = process.argv.slice(2);
  return { height: Number(height), weight: Number(weight) };
};

const mainr = () => {
  const { height, weight } = parseArgc();
  const bmi = bmiCalculator(height, weight);
  console.log(bmi);
};

mainr();
