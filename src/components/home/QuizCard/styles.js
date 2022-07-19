import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#F8F2EE",
    borderRadius: 8,
    borderColor: globalStyles.color.darkGrey,
    borderWidth: 1,

    height: 254,

    alignItems: "center",
    overflow: "hidden",
  },
  textContainer: {
    marginTop: 5,
    height: 60,
    justifyContent: "space-around",
  },
  banner: {
    paddingTop: 0,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,

    color: globalStyles.color.headerBlack,
  },
  shortDescription: {
    fontFamily: globalStyles.font.main,
    fontSize: 14,
    color: globalStyles.color.headerBlack,
  },
});

export default styles;
