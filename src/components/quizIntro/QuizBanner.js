import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

function QuizBanner({ source, difficulty }) {
  return (
    <View style={styles.bannerContainer}>
      <Image
        source={{
          uri: source,
        }}
        style={styles.banner}
      />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{`${difficulty.toUpperCase()}`}</Text>
      </View>
    </View>
  );
}

export default QuizBanner;
