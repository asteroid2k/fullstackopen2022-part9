interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
export const calculateExercises = (hours: number[], target: number): Result => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((h) => h > 0).length;
  const sumHours = hours.reduce((sum, curr) => (sum += Number(curr)), 0);
  const average = sumHours / periodLength;
  const success = average >= target;
  let rating = Number(((average / target) * 3).toFixed(1));
  rating = rating > 3 ? 3 : rating;
  let ratingDescription = "";
  if (rating >= 3) {
    ratingDescription = "Awesome!";
  } else if (rating >= 2.8 && rating < 3.0) {
    ratingDescription = "Almost there.";
  } else if (rating >= 1.5 && rating <= 2.7) {
    ratingDescription = "Meh";
  } else {
    ratingDescription = "Terrible";
  }

  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingDescription,
  };
};

export const bmiCalculator = (height: number, weight: number): string => {
  height /= 100;
  const bmi = weight / Math.pow(height, 2);
  if (bmi < 16.0) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal (healthy weight)";
  } else {
    return "Overweight";
  }
};
