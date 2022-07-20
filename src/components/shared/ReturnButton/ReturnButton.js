import React from "react";
import { Pressable, Image } from "react-native";

import styles from "./styles";

function ReturnButton({ goBack }) {
  return (
    <Pressable style={styles.buttonContainer} onPress={goBack}>
      <Image source={require("../../../../assets/icons/goBack.png")} />
    </Pressable>
  );
}

export default ReturnButton;
