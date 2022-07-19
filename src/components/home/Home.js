import React, { createContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import HomeHeader from "./HomeHeader/HomeHeader";
import BagdgeList from "./Badge/BadgeList";

import { fetchQuizzes, fetchUser } from "../../../api/client";

import styles from "./styles";

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

  return (
    <SafeContainer>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <HomeHeader username={userData.name} />

          <View>
            <Text>SearchBar</Text>
          </View>

          <BagdgeList quizzes={quizzes} />

          <View>
            <Text>Quizz cards. FlatList or no?</Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text>Inferior AppNavBar</Text>
      </View>
    </SafeContainer>
  );
}

export default Home;
