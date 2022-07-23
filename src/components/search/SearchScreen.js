import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";

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
      data.length === 0 ? setSearchState("failed") : setSearchState("success");
      setResults(data);
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
          {isState("success") && (
            <Text style={styles.numResults}>{`${results.length} Results`}</Text>
          )}
        </View>

        {isState("idle") && (
          <InfoSearch
            headerText={"Comece a pesquisar..."}
            infoText={
              "Digite um termo de busca para pesquisar todos os quizzes disponíveis no aplicativo!"
            }
          />
        )}

        {isState("failed") && (
          <InfoSearch
            image={require("../../../assets/images/searchScreen/coolKid.png")}
            headerText={"Quiz não encontrado"}
            infoText={
              "Não encontramos nenhum quiz. Tente procurar usando palavras chaves diferentes..."
            }
          />
        )}
      </View>

      {isState("success") && (
        <QuizList quizzes={results} handlePress={handleQuizPress} />
      )}
    </SafeContainer>
  );
}

function InfoSearch({ image, headerText, infoText }) {
  return (
    <View style={styles.infoContainer}>
      {image && (
        <View style={styles.bannerContainer}>
          <Image style={styles.banner} source={image} />
        </View>
      )}
      <Text style={styles.headerText}>{headerText}</Text>
      <Text style={styles.infoText}>{infoText}</Text>
    </View>
  );
}

export default SearchScreen;
