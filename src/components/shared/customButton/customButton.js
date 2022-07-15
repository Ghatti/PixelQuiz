import React from "react";
import { Text, Pressable } from "react-native";

import styles from "./styles";

function CustomButton({ displayText, handlePress }) {
  return (
    <Pressable style={styles.customButton} onPress={handlePress}>
      <Text style={styles.buttonText}>{displayText}</Text>
    </Pressable>
  );
}

export default CustomButton;
