import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  exerciseInputFieldContainer: {
    marginHorizontal: 3,
    borderRadius: 5,
  },
  contentContainer: {
    display: "flex",
    backgroundColor: "#d5cece",

    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
    marginVertical: 5,

    borderRadius: 5,
  },
  exerciseText: {
    fontWeight: "500",
    marginLeft: 5,
  },
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
  exerciseInfoModalContentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 35,
  },
  addNewExerciseButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "65%",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});

export default styles;
