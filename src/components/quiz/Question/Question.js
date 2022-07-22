import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";

import AnswerCard from "./AnswerCard";

import styles from "./styles";

function Question({ selected, questionData, handleAnswer }) {
  const { question_text, banner_image, answers, correct_answer_index } =
    questionData;

  function isCorrect(index) {
    return index === correct_answer_index;
  }

  function isSelected(index) {
    return index === selected;
  }

  const handlePress = handleAnswer(correct_answer_index);

  function renderAnswer({ item, index }) {
    return (
      <AnswerCard
        content={item}
        selected={isSelected(index)}
        correct={isCorrect(index)}
        handlePress={() => handlePress(index)}
      />
    );
  }

  return (
    <View>
      <Text>{question_text}</Text>

      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: banner_image,
          }}
          style={styles.banner}
        />
      </View>

      <FlatList
        data={answers}
        renderItem={renderAnswer}
        keyExtractor={(item, index) => `answer-${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Question;
