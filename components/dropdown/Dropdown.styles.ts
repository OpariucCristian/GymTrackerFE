import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  drowndownContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
    borderRadius: 5,
    backgroundColor: "#f2f3f5",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
  button: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  buttonText: {
    flex: 1,
  },
  childrenDropdown: {
    position: "relative",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  youtubeIcon: { marginRight: 15, marginTop: 10 },
  arrowIcon: { marginTop: 5 },
});

export default styles;
