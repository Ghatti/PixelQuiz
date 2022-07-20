import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Image,
} from "react-native";

import QuizCard from "./QuizCard";
import styles from "./styles";

function QuizList({ quizzes, handlePress }) {
  function renderItem({ item }) {
    return <QuizCard quiz={item} handlePress={handlePress} />;
  }

  return quizzes ? (
    <FlatList
      style={styles.outsideList}
      data={quizzes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  ) : null;
}

export default QuizList;
