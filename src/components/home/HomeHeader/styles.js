import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  headerContainer: {
    height: 75,
    justifyContent: "space-around",
  },
  smallText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 16,
    color: globalStyles.color.headerBlack,
  },
  mainText: {
    /* Title */

    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 32,
    color: "#333333",
  },
});

export default styles;
