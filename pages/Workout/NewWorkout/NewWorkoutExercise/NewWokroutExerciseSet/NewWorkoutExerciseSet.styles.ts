import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseContainer: {
    color: "white",
    padding: 10,
    margin: 10,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    width: "90%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exerciseControlsContainer: {
    flexDirection: "row",

    display: "flex",
    whidth: "100%",
    justifyContent: "space-between",
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  exerciseControlText: {
    color: "white",
    fontWeight: "600",
  },
  inputField: {
    color: "white",
    fontWeight: "600",
  },
  exerciseControlContainer: {
    display: "flex",
  },
  exerciseInfoInputContainer: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  exerciseInputContainer: {
    width: "3.5rem",
    // backgroundColor: "grey",
    // borderWidth: 5,
  },
  workoutExerciseSetContainer: {
    marginTop: "5%",
  },
});

export default styles;
