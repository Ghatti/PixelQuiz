import { StyleSheet, StatusBar } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#FFFFFF",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default styles;
