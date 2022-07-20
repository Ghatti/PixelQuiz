import React, { createContext, useEffect, useState } from "react";
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

function NavIcon({ desc, icon, activeIcon, active, handlePress }) {
  return (
    <Pressable style={styles.navIconContainer} onPress={handlePress}>
      <Image source={active ? activeIcon : icon} />
      <Text style={active ? styles.activeIconText : styles.iconText}>
        {desc}
      </Text>
    </Pressable>
  );
}

export default NavIcon;
