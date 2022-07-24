import React from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";

import AnsweredInfo from "./AnsweredInfo";

import styles from "./styles";

function QuizCard({ quiz, displayAnswered, handlePress }) {
  const {
    banner_image,
    title,
    short_description,
    difficulty,
    correct_answers_count,
    questions_count,
    answered_date,
  } = quiz;

  return (
    <Pressable onPress={() => handlePress(quiz)}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={{
              uri: banner_image,
            }}
            style={styles.banner}
          >
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{`${
                difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
              }`}</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.textContainer}>
          {displayAnswered && (
            <AnsweredInfo
              correctNum={correct_answers_count}
              totalQuestions={questions_count}
              answeredDate={answered_date}
            />
          )}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.shortDescription}>{short_description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default QuizCard;
