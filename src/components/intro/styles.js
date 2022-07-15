import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#EDDFBC",
  },
  container: {
    flex: 1,

    width: "85%",

    justifyContent: "space-around",
  },
  skipLink: {
    marginTop: 20,
    alignSelf: "flex-end",

    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 14,
    color: globalStyles.color.darkGrey,
  },
  mainSection: {
    height: "55%",
    alignItems: "center",
  },

  image: {
    height: 160,
    resizeMode: "contain",
  },
  header: {
    marginTop: 20,
    maxHeight: 60,
    justifyContent: "center",

    fontFamily: globalStyles.font.main,
    fontSize: 24,
    fontWeight: "bold",
    color: globalStyles.color.headerBlack,
    textAlign: "center",
  },
  description: {
    marginTop: 20,
    height: 60,
  },
  stepsContainer: {
    width: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepIndicator: {
    height: 6,
    width: 6,
    backgroundColor: globalStyles.color.lightGrey,
  },
  currentStep: {
    height: 6,
    width: 16,
    backgroundColor: globalStyles.color.lightBlue,
    borderRadius: 4,
  },
});

export default styles;
