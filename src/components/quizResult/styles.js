import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    width: "88%",
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerTextContainer: {
    flex: 1,
  },
  headerText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,

    textAlign: "center",

    color: globalStyles.color.headerBlack,
  },
  mainSection: {
    height: "36%",
  },
  score: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 56,

    textAlign: "center",

    color: globalStyles.color.headerBlack,
    marginBottom: "auto",
  },
  text: {
    marginTop: 10,
    fontFamily: globalStyles.font.main,

    fontSize: 14,

    textAlign: "center",

    color: globalStyles.color.darlGrey,
  },
});

export default styles;
