import { SafeAreaView } from "react-native";
import styles from "./styles";

function SafeContainer({ children }) {
  console.log(children);
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default SafeContainer;
