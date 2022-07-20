import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "88%",
    justifyContent: "space-around",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",

    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,
    color: globalStyles.color.headerBlack,
  },

  bannerContainer: {
    width: "100%",
    height: 222,
  },
  banner: {
    flex: 1,
    resizeMode: "cover",
  },
  badgeContainer: {
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",

    marginTop: 10,
    marginRight: 25,
    

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
  sectionHeader: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,
    color: globalStyles.color.headerBlack,
  },
  sectionText: {
    marginTop: 5,
    fontFamily: globalStyles.font.main,

    fontSize: 14,
    color: globalStyles.color.headerBlack,
  },
});

export default styles;
