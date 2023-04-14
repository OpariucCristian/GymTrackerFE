import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseContainer: {
    color: "white",

    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  exerciseControlsContainer: {
    marginTop: "5%",
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    marginTop: "5%",
  },
  exerciseControlTextWeight: {
    color: "white",
    fontWeight: "600",
    width: "3.5rem",
    paddingRight: "0.3rem",
  },
  exerciseControlTextCheckbox: {
    color: "white",
    fontWeight: "600",
    paddingRight: "0.25rem",
  },
  exerciseControlTextSets: {
    color: "white",
    fontWeight: "600",
    width: "3.5rem",
  },
  exerciseControlTextReps: {
    color: "white",
    fontWeight: "600",
    width: "3.5rem",
    paddingLeft: "0.25rem",
  },
  inputField: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  exerciseSetsInfo: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addNewSetButton: {
    marginTop: "5%",
    width: "100%",
    height: "2rem",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addNewSetButtonText: {
    color: "white",
    fontWeight: "600",
    height: "1.3rem",
  },
});

export default styles;
