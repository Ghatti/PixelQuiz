import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../shared/customButton/customButton";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnButton from "../shared/ReturnButton/ReturnButton";
import styles from "./styles";
import { QUIZINTRO } from "../../../appData/routes/Routes";

function QuizResult({ navigation, route }) {
  const { rightAnswers, totalQuestions } = route.params;

  function goBack() {
    navigation.pop(2);
  }
  const resultHeader =
    rightAnswers === totalQuestions ? "Você é um mestre!" : "Quase lá...";
  const resultText =
    rightAnswers === totalQuestions
      ? "Você concluiu o quiz com sucesso e acertou todas as perguntas. Você é realmente muito bom!"
      : "Continue estudando e tentando, uma hora você vai gabaritar! Eu acredito em você!";

  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ReturnButton goBack={goBack} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Resultados</Text>
          </View>
        </View>

        <View style={styles.mainSection}>
          <Text
            style={styles.score}
          >{`${rightAnswers}/${totalQuestions}`}</Text>
          <Text style={styles.headerText}>{resultHeader}</Text>
          <Text style={styles.text}>{resultText}</Text>
        </View>

        <CustomButton displayText="Finalizar" handlePress={goBack} />
      </View>
    </SafeContainer>
  );
}

export default QuizResult;
