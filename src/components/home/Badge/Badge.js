import React, { createContext, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";

function Badge({ category, handlePress }) {
  return (
    <Pressable onPress={() => handlePress(category)}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{`#${category.toUpperCase()}`}</Text>
      </View>
    </Pressable>
  );
}

export default Badge;
