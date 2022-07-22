import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 40,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: globalStyles.color.grey,
    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
