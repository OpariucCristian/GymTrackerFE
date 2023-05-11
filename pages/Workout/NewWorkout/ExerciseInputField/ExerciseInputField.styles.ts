import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5cece",
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
    backgroundColor: "#d5cece",
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
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "45%",
    marginRight: 5,
    gap: 5,
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
  exerciseTextMuscleGroup: {
    flex: 1,
    fontWeight: "500",
    marginLeft: 5,
    fontSize: 12,
  },

  youtubeIcon: { marginRight: 10, marginBottom: 5 },
  exerciseInfoModalContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "85%",
    paddingVertical: 10,
    borderRadius: 5,
  },
  infoModalTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginVertical: 1,
    marginHorizontal: 7,
  },
  infoModalDescription: {
    fontSize: 15,
    marginVertical: 10,
    marginHorizontal: 7,
  },
});

export default styles;
