import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    width: "88%",
  },
  headerContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  questionCounter: {
    flexGrow: 1,
    fontFamily: globalStyles.font.main,
    fontSize: 16,
    textAlign: "center",
    color: globalStyles.color.darkGrey,
    opacity: 0.6,
  },
  buttonContainer: {
    height: 70,
    alignItems: "center",
  },
});

export default styles;
