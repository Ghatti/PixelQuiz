import React from "react";
import { Text, Pressable } from "react-native";

import styles from "./styles";

function CustomButton({ containerStyle, textStyle, displayText, handlePress }) {
  return (
    <Pressable
      style={containerStyle ? containerStyle : styles.customButton}
      onPress={handlePress}
    >
      <Text style={textStyle ? textStyle : styles.buttonText}>
        {displayText}
      </Text>
    </Pressable>
  );
}

export default CustomButton;
