import { StyleSheet } from "react-native";
import globalStyles from "../../../globalStyles";

const styles = StyleSheet.create({
  navBarContainer: {
    height: 78,
    width: "100%",

    backgroundColor: globalStyles.color.white,

    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: globalStyles.color.grey,

    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    height: "80%",
    alignItems: "center",
  },
  flatListContainer: {
    width: "88%",
    justifyContent: "space-around",
  },
  navIconContainer: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  activeIconText: {
    fontFamily: globalStyles.font.main,
    color: globalStyles.color.purple,
    fontSize: 14,
    textAlign: "center",
  },
  iconText: {
    fontFamily: globalStyles.font.main,
    color: globalStyles.color.grey,
    fontSize: 14,
    textAlign: "center",
  },
});

export default styles;
