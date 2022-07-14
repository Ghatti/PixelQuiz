import React, { useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import styles from "./styles";

import SafeContainer from "../shared/SafeContainer/SafeContainer";

function LoginScreen() {
  return (
    <SafeContainer>
      <View>
        <Text>Login Screen</Text>
      </View>
    </SafeContainer>
  );
}

export default LoginScreen;
