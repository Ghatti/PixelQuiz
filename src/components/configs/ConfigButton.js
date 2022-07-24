import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";

function ConfigButton({ icon, configName, configValue }) {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.mainSection}>
        <Text style={styles.configName}>{configName}</Text>
        <Text style={styles.configValue}>{configValue && configValue}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/configs/rightArrow.png")}
        />
      </View>
    </View>
  );
}

export default ConfigButton;
