import React from "react";
import { Text } from "react-native";
import styles from "./styles";

function SecondaryText({ value }) {
  return <Text style={styles.secondaryText}>{value}</Text>;
}

export default SecondaryText;
