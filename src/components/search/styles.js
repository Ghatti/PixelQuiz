import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 90,
    width: "88%",
  },
  headerContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchBarContainer: {
    marginLeft: 15,
    flex: 1,
  },
  numResults: { marginTop: 10 },
  infoContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerContainer: {
    width: "100%",
    maxHeight: 252,
    flex: 1,
    marginBottom: 10,
  },
  banner: {
    flex: 1,
    resizeMode: "contain",
  },
  headerText: {
    fontFamily: globalStyles.font.main,

    fontWeight: "bold",
    fontSize: 24,

    textAlign: "center",

    color: globalStyles.color.headerBlack,
  },
  infoText: {
    marginTop: 25,
    fontFamily: globalStyles.font.main,
    fontSize: 14,

    textAlign: "center",

    color: globalStyles.color.darkGrey,
  },
});

export default styles;
