import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseContainer: {
    color: "white",
    padding: 10,

    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    width: "100%",
  },
  exerciseControlsContainer: {
    marginTop: "5%",
  },
  exerciseName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  exerciseControlText: {
    color: "white",
    fontWeight: "600",
    width: "3.5rem",
  },
  inputField: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  exerciseSetsInfo: {
    display: "flex",
    width: "87%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    width: "20%",
  },
});

export default styles;
