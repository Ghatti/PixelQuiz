import { StyleSheet } from "react-native";

const globalStyles = {
  fontFamily: "Rubik",
  darkGrey: "#78746D",
  grey: "#BEBAB3",
  lightGrey: "#D5D4D4",
  headerBlack: "#3C3A36",
  purple: "#82327E",
  lightBlue: "#65AAEA",
  white: "#FFFFFF",
};

const styles = StyleSheet.create({
  container: {
    height: "55%",
    width: "85%",
    justifyContent: "space-around",
  },
  screenHeader: {
    height: 32,

    fontFamily: globalStyles.fontFamily,
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,

    textAlign: "center",
    letterSpacing: -0.5,

    color: globalStyles.headerBlack,
  },
  inputBox: {
    padding: 16,

    height: 53,

    backgroundColor: globalStyles.white,

    borderWidth: 1,
    borderColor: globalStyles.grey,
    borderStyle: "solid",
    borderRadius: 12,
  },
  secondaryText: {
    
    height: 16,
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",

    color: globalStyles.darkGrey,
  },
});

export default styles;
