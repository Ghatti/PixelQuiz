import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

import ReturnButton from "../shared/ReturnButton/ReturnButton";

function QuizIntroHeader({ title, goBack }) {
  return (
    <View style={styles.headerContainer}>
      <ReturnButton goBack={goBack} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

export default QuizIntroHeader;
