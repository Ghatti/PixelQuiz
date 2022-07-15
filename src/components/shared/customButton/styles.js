import { StyleSheet } from "react-native";

const globalStyles = {
  fontFamily: "Rubik",
  purple: "#82327E",
};

const styles = StyleSheet.create({
  customButton: {
    width: 300,
    height: 56,
    borderRadius: 16,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: globalStyles.purple,
  },
  buttonText: {
    color: "white",
    fontFamily: globalStyles.fontFamily,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
