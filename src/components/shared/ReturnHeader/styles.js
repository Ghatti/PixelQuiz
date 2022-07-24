import { StyleSheet, StatusBar } from "react-native";

import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    textAlign: "center",

    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,
    color: globalStyles.color.headerBlack,
  },
});

export default styles;
