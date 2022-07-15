import React, { useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import styles from "./styles";

//custom components
import SafeContainer from "../shared/SafeContainer/SafeContainer";
import CustomButton from "../shared/customButton/customButton";
import SecondaryText from "../shared/SecondaryText/SecondaryText";

//data
import displayContent from "../../../appData/IntroScreen/displayData";
import { LOGIN } from "../../../appData/routes/Routes";

function StepIndicator({ current }) {
  const style = current ? styles.currentStep : styles.stepIndicator;

  return <View style={style} />;
}

export default function IntroScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const content = displayContent;

  function goToLogin() {
    navigation.navigate(LOGIN);
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

          <View style={styles.description}>
            <SecondaryText value={content[step].description} />
          </View>

          <FlatList
            contentContainerStyle={styles.stepsContainer}
            data={content}
            renderItem={renderItem}
            keyExtractor={(item, index) => `step-${index}`}
            horizontal={true}
          />
        </View>
        <CustomButton
          displayText={step === 2 ? "Vamos lá!" : "Avançar"}
          handlePress={handlePress}
        />
      </View>
    </SafeContainer>
  );
}
