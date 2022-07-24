import { StyleSheet, StatusBar } from "react-native";

import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "88%",
    alignItems: "center",
    justifyContent: "flex-start",
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
  accountInfo: {
    color: globalStyles.color.headerBlack,
    fontFamily: globalStyles.font.main,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 15,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    width: "100%",
    height: 82,

    background: globalStyles.color.white,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: globalStyles.color.darkGrey,

    borderRadius: 16,
    backgroundColor: "white",
  },
  iconContainer: {
    width: 25,
    height: 50,
  },
  icon: {
    flex: 1,
    resizeMode: "contain",
  },
  mainSection: {
    width: "65%",
    justifyContent: "space-around",
  },
  configName: {
    color: globalStyles.color.headerBlack,
    fontFamily: globalStyles.font.main,
    fontSize: 20,
    fontWeight: "bold",
  },
  configValue: {
    color: globalStyles.color.darkGrey,
    fontFamily: globalStyles.font.main,
    fontSize: 14,
  },
});

export default styles;
