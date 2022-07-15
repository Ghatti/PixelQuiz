import { StyleSheet } from "react-native";

import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  customButton: {
    width: 300,
    height: 56,
    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: globalStyles.color.purple,
  },
  buttonText: {
    color: "white",
    fontFamily: globalStyles.font.main,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
