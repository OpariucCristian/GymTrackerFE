const WORKOUTIMAGE1 = require("./workout1.jpg");
const WORKOUTIMAGE2 = require("./workout2.jpg");
const WORKOUTIMAGE3 = require("./workout3.jpg");
const WORKOUTIMAGE4 = require("./workout4.jpg");
const WORKOUTIMAGE5 = require("./workout5.jpg");

const WORKOUTIMAGES = [
  WORKOUTIMAGE1,
  WORKOUTIMAGE2,
  WORKOUTIMAGE3,
  WORKOUTIMAGE4,
  WORKOUTIMAGE5,
];

export const getRandomWorkoutImage = () => {
  const randomIndex = Math.floor(Math.random() * WORKOUTIMAGES.length);
  console.log(WORKOUTIMAGES);
  return WORKOUTIMAGES[randomIndex];
};
