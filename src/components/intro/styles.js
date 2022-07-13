import { StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

const globalStyles = {
  fontFamily: "Rubik",
  darkGrey: "#78746D",
  headerBlack: "#3C3A36",
  purple: "#82327E",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    justifyContent: "space-around",
  },
  skipLink: {
    marginTop: 20,
    alignSelf: "flex-end",

    fontFamily: globalStyles.fontFamily,
    fontWeight: "bold",
    fontSize: 14,
    color: globalStyles.darkGrey,
  },
  mainSection: {
    height: "55%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  image: {
    height: 170,
    resizeMode: "contain",
  },
  header: {
    fontFamily: globalStyles.fontFamily,
    fontSize: 24,
    fontWeight: "bold",
    color: globalStyles.headerBlack,
    textAlign: "center",
  },
  description: {
    fontFamily: globalStyles.fontFamily,
    fontSize: 14,
    color: globalStyles.darkGrey,
    textAlign: "center",
  },
  stepIndicator: {
    height: 20,
    width: 20,
    backgroundColor: "blue",
    margin: 5,
    border: "red",
  },
  currentStep: {
    height: 20,
    width: 20,
    backgroundColor: "red",
    margin: 5,
    border: "red",
  },
  advanceButton: {
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
