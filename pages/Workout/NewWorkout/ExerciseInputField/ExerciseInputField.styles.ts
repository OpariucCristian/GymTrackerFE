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

  contentContainer: {
    display: "flex",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    marginVertical: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  workoutControlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    gap: 10,
  },
  exerciseInputFieldContainer: {
    marginHorizontal: 3,
    borderRadius: 5,
  },

  exerciseText: {
    flex: 1,
    fontWeight: "500",
    marginLeft: 5,
  },
  youtubeIcon: { marginRight: 10, marginTop: 10 },
});

export default styles;
