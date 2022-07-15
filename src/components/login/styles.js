import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    height: 325,
    width: "85%",
    justifyContent: "space-around",
  },
  screenHeader: {
    height: 32,

    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,

    textAlign: "center",
    letterSpacing: -0.5,

    color: globalStyles.color.headerBlack,
  },
  inputBox: {
    padding: 16,

    height: 53,

    backgroundColor: globalStyles.color.white,

    borderWidth: 1,
    borderColor: globalStyles.color.grey,
    borderStyle: "solid",
    borderRadius: 12,
  },
  secondaryText: {
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",

    color: globalStyles.color.darkGrey,
  },
});

export default styles;
