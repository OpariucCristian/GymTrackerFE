import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  workoutListContainer: {
    backgroundColor: "$backgroundColor",
  },
  workoutList: {
    marginBottom: "10%",
  },
  pastWorkoutsTextContainer: {
    backgroundColor: "$backgroundColor",
  },

  pastWorkoutsText: {
    fontSize: 33,
    paddingTop: 33 - 33 * 0.75,
    color: "#fff",
    fontWeight: "600",
    marginLeft: "10%",
    marginTop: "10%",
  },

  workoutHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
    marginLeft: "6%",
  },
  startWorkoutButton: {
    width: "28%",
    marginRight: "10%",
  },
  startWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  workoutCard: {
    display: "flex",
    width: "80%",
    borderRadius: 10,
    border: "1px solid black",
    overflow: "hidden",
    alignSelf: "center",
    marginTop: "10%",
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  workoutExerciseDetails: {
    fontSize: 12,
    color: "white",
  },
  exercisesContainerScrollable: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
  },
  exercisesContainer: {
    display: "flex",
    flexDirection: "row",
    margin: "1%",
    height: "50%",
    marginTop: "4%",
  },

  exerciseContainer: {
    color: "white",
    marginLeft: "1rem",
  },
  backgroundImage: {
    position: "relative",
    zIndex: -1,
    width: "100%",
    height: "11rem",
    borderRadius: 10,
  },
  darkness: {
    backgroundColor: "rgba(0,0,0,0.15)",
    width: "100%",
    height: 200,
  },
  deleteWorkoutCardButton: {
    right: "25%",
    height: "10.8rem",
    marginTop: "60%",
    zIndex: 1,
  },
});

export default styles;
