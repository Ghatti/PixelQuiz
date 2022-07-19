import React, { createContext, useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";

import styles from "./styles";
import { SEARCH } from "../../../../appData/routes/Routes";

function Badge({ category, navigation }) {
  function handlePress() {
    navigation.navigate(SEARCH, { searchTerm: category });
  }

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{category.toUpperCase()}</Text>
      </View>
    </Pressable>
  );
}

export default Badge;
