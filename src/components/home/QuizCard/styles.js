import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#F8F2EE",
    borderRadius: 8,
    borderColor: globalStyles.color.grey,
    borderWidth: 1,

    height: 275,
    width: "100%",
    alignItems: "center",
    overflow: "hidden",
  },
  outsideList: {
    width: "88%",
    marginTop: 25,
  },

  bannerContainer: {
    width: "100%",
    height: 171,
  },
  banner: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  badgeContainer: {
    justifyContent: "center",
    alignItems: "center",

    marginRight: 25,
    marginBottom: 10,

    width: 72,
    height: 30,

    backgroundColor: globalStyles.color.lightBlue,
    borderRadius: 16,
  },
  badgeText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 12,

    color: "#F2F2F2",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    width: "90%",
    paddingLeft: 10,
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
