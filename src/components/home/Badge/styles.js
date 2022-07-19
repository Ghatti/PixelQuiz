import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  badgeContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginRight: 10,

    width: 63,
    height: 24,

    backgroundColor: globalStyles.color.lightBlue,
    borderRadius: 12,
  },
  badgeText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 12,

    color: "#F2F2F2",
  },
});

export default styles;
