import React from "react";
import { View, FlatList } from "react-native";

import NavIcon from "./NavIcon";

import styles from "./styles";

import navData from "../../../../appData/Home/navData";

function InferiorNavBar({ active, handlePress }) {
  function renderItem({ item }) {
    const { desc, icon, activeIcon, route } = item;
    return (
      <NavIcon
        desc={desc}
        icon={icon}
        activeIcon={activeIcon}
        active={active === route}
        handlePress={() => handlePress(route)}
      />
    );
  }

  return (
    <View style={styles.navBarContainer}>
      <View style={styles.flatList}>
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={navData}
          renderItem={renderItem}
          keyExtractor={({ desc }) => `nav-${desc}`}
          horizontal={true}
        />
      </View>
    </View>
  );
}

export default InferiorNavBar;
