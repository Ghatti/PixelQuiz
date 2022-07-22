import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Pressable } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnButton from "../shared/ReturnButton/ReturnButton";
import SearchBar from "../shared/SearchBar/SearchBar";
import QuizList from "../home/QuizCard/QuizList";
import styles from "./styles";

import { searchQuiz } from "../../../api/client";
import { QUIZINTRO } from "../../../appData/routes/Routes";

function SearchScreen({ navigation, route }) {
  const { searchTerm } = route.params;

  const [searchState, setSearchState] = useState("idle");
  const [results, setResults] = useState([]);

  function goBack() {
    navigation.pop();
  }

  function isState(desiredState) {
    return searchState === desiredState;
  }

  async function getResults(term) {
    const result = await searchQuiz(term);

    const { success, data } = result;
    if (success) {
      setSearchState("success");
      setResults(data);
    } else {
      setSearchState("failed");
    }
  }

  function handleQuizPress(quiz) {
    navigation.navigate(QUIZINTRO, { quiz });
  }

  useEffect(() => {
    if (searchTerm) {
      getResults(searchTerm);
    }
  }, []);

  return (
    <SafeContainer>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <ReturnButton goBack={goBack} />
          <View style={styles.searchBarContainer}>
            <SearchBar handleSearch={(term) => getResults(term)} />
          </View>
        </View>

        <View>
          {isState("success") && <Text>{`${results.length} Results`}</Text>}
        </View>

        <View>
          {isState("idle") && (
            <Text>If not searched, show comece a pesquisar</Text>
          )}
          {isState("success") && (
            <QuizList quizzes={results} handlePress={handleQuizPress} />
          )}
          {isState("failed") && (
            <Text>If search and no results, show no quiz found</Text>
          )}
        </View>
      </View>
    </SafeContainer>
  );
}

export default SearchScreen;
