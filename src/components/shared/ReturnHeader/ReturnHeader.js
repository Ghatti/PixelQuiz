import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import ReturnButton from "../ReturnButton/ReturnButton";

function ReturnHeader({ title, textStyle, goBack }) {
  return (
    <View style={styles.container}>
      <ReturnButton goBack={goBack} />
      <Text style={textStyle ? textStyle : styles.title}>{title}</Text>
    </View>
  );
}

export default ReturnHeader;
