import React, { createContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Image,
} from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import SearchBar from "../shared/SearchBar/SearchBar";
import BagdgeList from "./Badge/BadgeList";
import QuizList from "./QuizCard/QuizList";
import InferiorNavBar from "../shared/InferiorNavBar/InferiorNavBar";

import { fetchQuizzes, fetchUser } from "../../../api/client";

import styles from "./styles";
import {
  HOME,
  PROFILE,
  CONFIGS,
  SEARCH,
  QUIZINTRO,
} from "../../../appData/routes/Routes";

function Home({ navigation }) {
  const [userData, setUserData] = useState({});
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    async function getUser() {
      const { success, data } = await fetchUser();

      success && setUserData(data);
    }

    getUser();
  }, []);

  useEffect(() => {
    async function getQuizzes() {
      const { success, data } = await fetchQuizzes();
      console.log(data);
      success && setQuizzes(data);
    }

    getQuizzes();
  }, []);

  function handleBadgePress(category) {
    navigation.navigate(SEARCH, { searchTerm: category });
  }

  function handleQuizPress(quiz) {
    navigation.navigate(QUIZINTRO, { quiz });
  }

  function handleSearch(searchTerm) {
    navigation.navigate(SEARCH, { searchTerm });
  }

  function handleNavPress(route) {
    navigation.navigate(route);
  }

  return (
    <SafeContainer>
      <View style={styles.container}>
        <HomeHeader username={userData.name} />

        <SearchBar handleSearch={handleSearch} />

        <BagdgeList quizzes={quizzes} handlePress={handleBadgePress} />
      </View>

      <QuizList quizzes={quizzes} handlePress={handleQuizPress} />
      <InferiorNavBar active={HOME} handlePress={handleNavPress} />
    </SafeContainer>
  );
}

export default Home;
