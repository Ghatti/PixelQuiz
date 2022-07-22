import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";

import styles from "./styles";

function AnswerCard({ content, selected, correct, handlePress }) {
  const onPressStyle = correct
    ? styles.correctAnswerCardContainer
    : styles.wrongAnswerCardContainer;

  return (
    <Pressable onPress={handlePress}>
      <View style={selected ? onPressStyle : styles.answerCardContainer}>
        <Text style={styles.answerCardText}>{content}</Text>
      </View>
    </Pressable>
  );
}

export default AnswerCard;
