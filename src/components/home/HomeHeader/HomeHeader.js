import React from "react";
import { ScrollView, View, Text, TextInput, Pressable } from "react-native";

import styles from "./styles";

function HomeHeader({ username }) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.smallText}>Hello,</Text>
      <Text style={styles.mainText}>{username}</Text>
    </View>
  );
}

export default HomeHeader;
