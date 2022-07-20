import { StyleSheet } from "react-native";

import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  inputBoxContainer: {
    flexDirection: "row",
    alignItems: "center",

    padding: 16,
    height: 53,

    backgroundColor: globalStyles.color.white,

    borderWidth: 1,
    borderColor: globalStyles.color.grey,
    borderStyle: "solid",
    borderRadius: 12,
  },
  submitButton: {
    marginLeft: "auto",
  },
  submitIcon: {
    width: 30,
    height: 30,
    resizeMode: "cover",
  },
});

export default styles;
