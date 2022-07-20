import React from "react";
import { View, FlatList } from "react-native";

import NavIcon from "./NavIcon";

import styles from "./styles";

import {
  HOME,
  PROFILE,
  CONFIGS,
} from "../../../../appData/routes/Routes";

function InferiorNavBar({ active, handlePress }) {
  const navData = [
    {
      icon: require("../../../../assets/icons/homeNavbar/courses.png"),
      activeIcon: require("../../../../assets/icons/homeNavbar/coursesActive.png"),
      desc: "Quizzes",
      route: HOME,
    },
    {
      icon: require("../../../../assets/icons/homeNavbar/profile.png"),
      activeIcon: require("../../../../assets/icons/homeNavbar/profileActive.png"),
      desc: "Perfil",
      route: PROFILE,
    },
    {
      icon: require("../../../../assets/icons/homeNavbar/configs.png"),
      activeIcon: require("../../../../assets/icons/homeNavbar/configsActive.png"),
      desc: "Configs",
      route: CONFIGS,
    },
  ];

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
