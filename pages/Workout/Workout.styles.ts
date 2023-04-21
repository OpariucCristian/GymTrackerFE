import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  workoutPageContainer: {
    backgroundColor: "$backgroundColor",
    height: "100%",
    paddingTop: "15%",
  },
  workoutListContainer: {
    backgroundColor: "$backgroundColor",
  },
  workoutList: {
    marginBottom: "10%",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  newWorkoutButton: {
    marginTop: "10%",
    marginBottom: "2.5%",
    width: "65%",
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
  pastWorkoutsTextInfo: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "500",
    marginLeft: 50,
    marginTop: 25,
    width: "80%",

    lineHeight: 25,
  },
  newWorkoutButtonText: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
  newWorkoutButtonContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "$backgroundColor",
    alignItems: "center",
    width: "100%",
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
  deleteWorkoutButton: {
    width: "28%",
  },
  workoutExercise: {
    marginTop: "2%",
    marginLeft: "2%",
    display: "flex",
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
  currentWorkoutInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginTop: "13%",
    marginLeft: "3%",
    marginBottom: "2%",
  },
  currentWorkoutModalTitle: {
    fontSize: 23,
    fontWeight: "bold",
  },
  currentWorkoutButtonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "3%",
  },
});

export default styles;
