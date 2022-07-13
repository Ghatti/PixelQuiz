import { SafeAreaView } from "react-native";
import styles from "./mainStyles";

//Custom Components
import IntroScreen from "./intro/IntroScreen";


export default function Main() {
  return (
    <SafeAreaView style={styles.container}>
      <IntroScreen />
    </SafeAreaView>
  );
}
