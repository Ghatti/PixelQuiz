import React from "react";
import { View, Text } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import QuizBanner from "./QuizBanner";
import CustomButton from "../shared/customButton/customButton";
import ReturnHeader from "../shared/ReturnHeader/ReturnHeader";
import styles from "./styles";

import { QUIZ } from "../../../appData/routes/Routes";

function QuizIntro({ navigation, route }) {
  const { quiz } = route.params;
  const { id, title, banner_image, difficulty, description, questions_count } =
    quiz;

  function goBack() {
    navigation.goBack();
  }

  function startQuiz() {
    navigation.navigate(QUIZ, { id });
  }

  return (
    <SafeContainer>
      <View style={styles.container}>
        <ReturnHeader title={title} goBack={goBack} />
        <QuizBanner source={banner_image} difficulty={difficulty} />
        <View>
          <Text style={styles.sectionHeader}>Sobre o Quiz</Text>
          <Text style={styles.sectionText}>{description}</Text>
        </View>
        <View>
          <Text style={styles.sectionHeader}>Quantidade de perguntas</Text>
          <Text style={styles.sectionText}>{questions_count}</Text>
        </View>
        <CustomButton displayText={"Fazer tentativa"} handlePress={startQuiz} />
      </View>
    </SafeContainer>
  );
}

export default QuizIntro;
