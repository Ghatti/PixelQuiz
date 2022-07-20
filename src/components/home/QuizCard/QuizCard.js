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

import styles from "./styles";

function QuizCard({ quiz, navigation }) {
  function handlePress() {
    navigation.navigate("Quiz");
  }

  const { banner_image, title, short_description } = quiz;

  return (
    <Pressable onPress={() => handlePress(quiz)}>
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={{
              uri: banner_image,
            }}
            style={styles.banner}
          />
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
