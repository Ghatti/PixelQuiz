import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import styles from "./styles";

import { fetchQuestions } from "../../../api/client";
import CustomButton from "../shared/customButton/customButton";

function Quiz({ navigation, route }) {
  const { id } = route.params;

  const [currentIndex, setCurrentIndex] = useState(null);
  const [questions, setQuestions] = useState([]);

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

  function handleContinue() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      console.log("Go to results");
    }
  }

  return currentIndex !== null ? (
    <SafeContainer>
      <View>
        <Text>{id}</Text>
        <Text>{`${currentIndex} de ${questions.length}`} </Text>
        <Question questionData={questions[currentIndex]} />

        <CustomButton displayText="Continuar" handlePress={handleContinue} />
      </View>
    </SafeContainer>
  ) : null;
}

function Question({ questionData }) {
  const { question_text } = questionData;

  return (
    <View>
      <Text>{question_text}</Text>
      <Text>Question Banner</Text>
      <View>
        <Text>Questions Answers</Text>
      </View>
    </View>
  );
}

export default Quiz;
