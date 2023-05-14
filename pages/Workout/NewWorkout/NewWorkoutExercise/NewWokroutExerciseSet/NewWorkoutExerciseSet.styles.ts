import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseControlsContainer: {
    flexDirection: "row",
    display: "flex",
    width: "90%",
    marginTop: "2.5%",
  },
  inputField: {
    color: "white",
    fontWeight: "600",
    borderColor: "red",
  },
  exerciseControlContainer: {
    display: "flex",
  },
  exerciseInfoInputContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  exerciseInputContainer: {
    width: "3.6rem",
    height: "auto",
  },
  exerciseDeleteContainer: {
    width: 5,
    height: "auto",
  },

  checkboxContainer: {
    height: "auto",
  },
  workoutExerciseSetContainer: {
    marginTop: "5%",
  },

  exerciseInputStylesText: {
    color: "red",
    fontWeight: "600",
    width: "3.5rem",
    paddingRight: "0.3rem",
  },
  inputFieldLabelCheckboxText: {
    color: "white",
    fontWeight: "600",
    marginBottom: "0.4rem",
  },
  inputFieldLabel: {
    alignSelf: "center",
    textAlign: "center",
  },
  inputFieldLabelText: {
    color: "white",
    fontWeight: "600",
  },

  setContainer: {
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-between",
    width: "100%",
    alignItems: "stretch",
  },
  deleteSetButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  deleteSetButton: {
    width: "2rem",
    marginTop: "0.3rem",
  },
});

export default styles;
