import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
  },
  cardContainer: {
    flex: 1,
    width: "100%",

    justifyContent: "space-between",
    flexDirection: "row",
    padding: 4,
    paddingHorizontal: 10,
  },
  inputFieldContainer: {
    width: "4rem",
  },
  inputField: {
    height: "2rem",
  },
  button: {
    width: "25%",
  },
  exerciseName: {
    alignSelf: "center",
    width: "25%",
  },

  dropDownContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
  },
  workoutControlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 4,
    paddingHorizontal: 10,
  },
});

export default styles;
