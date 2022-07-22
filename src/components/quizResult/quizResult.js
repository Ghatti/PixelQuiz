import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../shared/customButton/customButton";

import SafeContainer from "../shared/SafeContainer/SafeContainer";

import styles from "./styles";
import { QUIZINTRO } from "../../../appData/routes/Routes";

function QuizResult({ navigation, route }) {
  const { rightAnswers, totalQuestions } = route.params;

  const resultHeader =
    rightAnswers === totalQuestions ? "Você é um mestre!" : "Quase lá...";
  const resultText =
    rightAnswers === totalQuestions
      ? "Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!"
      : "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!";

  return (
    <SafeContainer>
      <View>
        <Text>Resultados</Text>
        <Text>{`${rightAnswers}/${totalQuestions}`}</Text>
        <Text>{resultHeader}</Text>
        <Text>{resultText}</Text>
        <CustomButton
          displayText="Finalizar"
          handlePress={() => navigation.pop(2)}
        />
      </View>
    </SafeContainer>
  );
}

export default QuizResult;
