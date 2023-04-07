const WORKOUTIMAGE1 = require("./workout1.jpg");
const WORKOUTIMAGE2 = require("./workout2.jpg");
const WORKOUTIMAGE3 = require("./workout3.jpg");
const WORKOUTIMAGE4 = require("./workout4.jpg");
const WORKOUTIMAGE5 = require("./workout5.jpg");
const WORKOUTIMAGE6 = require("./workout6.jpg");
const WORKOUTIMAGE7 = require("./workout7.jpg");
const WORKOUTIMAGE8 = require("./workout8.jpg");
const WORKOUTIMAGE9 = require("./workout9.jpg");

const WORKOUTIMAGES = [
  WORKOUTIMAGE1,
  WORKOUTIMAGE2,
  WORKOUTIMAGE3,
  WORKOUTIMAGE4,
  WORKOUTIMAGE5,
  WORKOUTIMAGE6,
  WORKOUTIMAGE7,
  WORKOUTIMAGE8,
  WORKOUTIMAGE9,
];

export const getRandomWorkoutImage = () => {
  const randomIndex = Math.floor(Math.random() * WORKOUTIMAGES.length);
  return WORKOUTIMAGES[randomIndex];
};
