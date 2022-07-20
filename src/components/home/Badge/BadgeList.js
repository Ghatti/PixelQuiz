import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import Badge from "./Badge";

import styles from "./styles";

function BagdgeList({ quizzes, handlePress }) {
  const uniqueBadges = Array.from(new Set(quizzes.map((quiz) => quiz.search)));

  function renderItem({ item }) {
    return <Badge category={item} handlePress={handlePress} />;
  }

  return quizzes ? (
    <View>
      <FlatList
        data={uniqueBadges}
        renderItem={renderItem}
        keyExtractor={(item) => `badge-${item}`}
        horizontal={true}
      />
    </View>
  ) : null;
}

export default BagdgeList;
