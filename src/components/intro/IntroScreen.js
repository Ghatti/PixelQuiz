import React, { useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import styles from "./styles";
import displayContent from "../../../appData/IntroScreen/displayData";

function StepIndicator({ current }) {
  const style = current ? styles.currentStep : styles.stepIndicator;

  return <View style={style} />;
}

export default function IntroScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const content = displayContent;

  function goToLogin() {
    navigation.navigate("Login");
  }

  function handlePress() {
    step === 2 ? goToLogin() : setStep((prev) => (prev + 1) % 3);
  }

  function renderItem({ item, index }) {
    return <StepIndicator current={index === step} />;
  }

  return (
    <SafeContainer>
      <View style={styles.container}>
        <Pressable onPress={goToLogin}>
          <Text style={styles.skipLink}>Skip</Text>
        </Pressable>
        <View style={styles.mainSection}>
          <Image style={styles.image} source={content[step].image} />
          <Text style={styles.header}>{content[step].header}</Text>
          <Text style={styles.description}>{content[step].description}</Text>

          <FlatList
            contentContainerStyle={styles.stepsContainer}
            data={content}
            renderItem={renderItem}
            keyExtractor={(item, index) => `step-${index}`}
            horizontal={true}
          />
        </View>
        <Pressable style={styles.advanceButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Avançar</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}
