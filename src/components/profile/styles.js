import { StyleSheet, StatusBar } from "react-native";

import globalStyles from "../../globalStyles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "88%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatarContainer: {
    height: 155,
    width: 155,
    borderRadius: 150,
    overflow: "hidden",
  },
  avatar: {
    flex: 1,
    resizeMode: "cover",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    width: "80%",
    height: 70,

    backgroundColor: globalStyles.color.white,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: globalStyles.color.grey,
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: globalStyles.font.main,
    fontWeight: "bold",
    fontSize: 24,

    color: globalStyles.color.headerBlack,
  },
});

export default styles;
