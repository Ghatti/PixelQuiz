import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

function AnsweredInfo({ correctNum, totalQuestions, answeredDate }) {
  const [date, time] = answeredDate.split(" ");
  const [year, month, day] = date.split("-");
  const goodAttempt = correctNum > totalQuestions / 2;

  return (
    <View style={styles.answeredInfo}>
      <Text
        style={goodAttempt ? styles.goodAttempt : styles.badAttempt}
      >{`Você acertou ${correctNum} de ${totalQuestions}`}</Text>
      <Text style={styles.answeredDate}>
        Em {day}/{month}/{year}
      </Text>
    </View>
  );
}

export default AnsweredInfo;
