import React, { useEffect, useState } from "react";
import {

  FlatList,

} from "react-native";

import Badge from "./Badge";

import styles from "./styles";

function BagdgeList({ quizzes }) {
  const uniqueBadges = Array.from(new Set(quizzes.map((quiz) => quiz.search)));

  function renderItem({ item }) {
    return <Badge category={item} />;
  }

  return (
    <FlatList
      data={uniqueBadges}
      renderItem={renderItem}
      keyExtractor={(item) => `badge-${item}`}
      horizontal={true}
    />
  );
}

export default BagdgeList;
