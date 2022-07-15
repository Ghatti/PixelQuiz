import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  secondaryText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",

    color: globalStyles.color.darkGrey,
  },
});

export default styles;
