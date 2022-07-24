import React, { useState, useEffect } from "react";
import { View } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnHeader from "../shared/ReturnHeader/ReturnHeader";
import QuizList from "../home/QuizCard/QuizList";
import styles from "./styles";

import { fetchAnsweredQuizzes } from "../../../api/client";

function HistoryScreen({ navigation }) {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function fetchQuizzes() {
      const { success, data } = await fetchAnsweredQuizzes();

      success && setQuizzes(data);
    }

    fetchQuizzes();
  }, []);
  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={{ width: "88%" }}>
          <ReturnHeader
            title={"Seu histórico"}
            goBack={() => navigation.pop()}
          />
        </View>
        <QuizList
          quizzes={quizzes}
          displayAnswered={true}
          handlePress={() => null}
        />
      </View>
    </SafeContainer>
  );
}

export default HistoryScreen;
