import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";

import styles from "./styles";

function QuizCard({ quiz, navigation }) {
  function handlePress() {
    navigation.navigate("Quiz");
  }

  const { banner_image, title, short_description, difficulty } = quiz;

  return (
    <Pressable onPress={() => handlePress(quiz)}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <ImageBackground
            source={{
              uri: banner_image,
            }}
            style={styles.banner}
          >
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{`${
                difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
              }`}</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.shortDescription}>{short_description}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default QuizCard;
