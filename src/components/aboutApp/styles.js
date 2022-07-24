import { StyleSheet, StatusBar } from "react-native";

import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "88%",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    height: 150,
    width: 150,
    overflow: "hidden",
  },
  img: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  header: {
    marginVertical: 15,
    fontFamily: globalStyles.main,
    fontWeight: "bold",
    fontSize: 40,

    textAlign: "center",

    color: globalStyles.color.headerBlack,
  },
  aboutText: {
    fontFamily: globalStyles.main,
    fontSize: 14,

    textAlign: "center",

    color: globalStyles.color.darkGrey,
  },
});

export default styles;
