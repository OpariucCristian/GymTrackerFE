import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exitNewWorkoutModalButtonText: {
    fontWeight: "600",
  },
  newWorkoutModalHeaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3%",
    flexDirection: "row",
    width: "95%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  createNewWorkoutButton: {
    width: "40%",
  },
  createNewWorkoutButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  newExerciseInputFields: {
    marginTop: "5%",
  },
  newWorkoutNameInputContainer: {
    display: "flex",
    gap: "-1rem",
    width: "50%",
  },
  newWorkoutNameInput: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  newWorkoutModal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "$backgroundColor",
    paddingTop: "15%",
  },
  exerciseListModal: {
    display: "flex",
    alignSelf: "center",
    justifySelf: "center",
    height: "85%",
    width: "90%",
    backgroundColor: "$backgroundColor",
    marginTop: "15%",
    borderRadius: 10,
  },
  exerciseListModalContentContainer: {
    width: "100%",
    height: "90%",
    gap: "10%",
  },
  searchForExerciseInputContainer: {
    width: "80%",
    alignSelf: "center",
  },
  searchForExerciseInput: {
    color: "white",
  },
  newWorkoutNewExerciseButtonText: {
    fontWeight: "600",
    color: "#fff",
  },
  timerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "$darkGray",
  },
  workoutTimerContainer: {
    marginTop: "3%",
    marginLeft: "6%",
  },
  newWorkoutExerciseList: {
    width: "80%",
    alignSelf: "center",
  },
  newWorkoutBottomActionsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: "5%",
    marginBottom: "10%",
  },
});

export default styles;
