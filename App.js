import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Main from "./src/components/Main";

export default function App() {
  const [loaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik/static/Rubik-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <Main />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
