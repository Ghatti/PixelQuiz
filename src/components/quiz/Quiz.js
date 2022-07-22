import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import Question from "./Question/Question";
import CustomButton from "../shared/customButton/customButton";
import ReturnButton from "../shared/ReturnButton/ReturnButton";

import styles from "./styles";
import { fetchQuestions } from "../../../api/client";
import { QUIZRESULT } from "../../../appData/routes/Routes";

function Quiz({ navigation, route }) {
  const { id } = route.params;

  const [currentIndex, setCurrentIndex] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function getQuestions() {
      const { success, data } = await fetchQuestions(id);
      if (success) {
        setQuestions(data.data);
        setCurrentIndex(0);
      }
    }

    getQuestions();
  }, []);

  function goBack() {
    navigation.goBack();
  }

  function hasAnswered() {
    return selected !== null;
  }

  function handleAnswer(correctIndex) {
    return function (index) {
      if (!hasAnswered()) {
        setSelected(index);
        correctIndex === index && setRightAnswers((prev) => prev + 1);
      }
    };
  }

  function handleContinue() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
    } else {
      navigation.navigate(QUIZRESULT, {
        rightAnswers,
        totalQuestions: questions.length,
      });
    }
  }

  return currentIndex !== null ? (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ReturnButton goBack={goBack} />

          <Text style={styles.questionCounter}>
            {`${currentIndex} de ${questions.length}`}
          </Text>
        </View>

        <Question
          selected={selected}
          questionData={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />

        <View style={styles.buttonContainer}>
          {hasAnswered() && (
            <CustomButton
              displayText="Continuar"
              handlePress={handleContinue}
            />
          )}
        </View>
      </View>
    </SafeContainer>
  ) : null;
}

export default Quiz;
