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
    // justifyContent: "space-between",
    // marginTop: 5,
    marginLeft: "3%",
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
    textAlign: "center",
  },
  exerciseControlContainer: {
    display: "flex",
    alignItems: "space-around",
    justifyContent: "center",
  },
  exerciseInfoInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    gap: "4.2rem",
    // gap: "-1rem",
    // height: "100%",
    // marginTop: "5%",
  },

  exerciseInputContainer: {
    width: "3rem",
  },
});

export default styles;
