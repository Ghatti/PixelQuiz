import React, { useState } from "react";
import { render } from "react-dom";
import { View, Text, Image, Pressable, FlatList } from "react-native";
import styles from "./styles";

function StepIndicator({ current }) {
  const style = current ? styles.currentStep : styles.stepIndicator;

  return <View style={style} />;
}

export default function IntroScreen(props) {
  const content = [
    {
      image: require("../../../assets/images/introScreen/GiantPhone.png"),
      header: "Aprenda a qualquer hora e em qualquer lugar",
      description:
        "Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!",
    },
    {
      image: require("../../../assets/images/introScreen/HandBook.png"),
      header: "Diversos assuntos para você",
      description:
        "São vários quizes diferentes para você. Escolha um e se aventure!",
    },
    {
      image: require("../../../assets/images/introScreen/CoolKids.png"),
      header: "Melhore suas habilidades",
      description:
        "Memorize os conteúdos do aplicativo e melhore suas habilidades!",
    },
  ];

  const [step, setStep] = useState(0);

  function handlePress() {
    setStep((prev) => (prev + 1) % 3);
  }

  function renderItem({ item, index }) {
    return <StepIndicator current={index === step} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.skipLink}>Skip</Text>
      <View style={styles.mainSection}>
        <Image style={styles.image} source={content[step].image} />
        <Text style={styles.header}>{content[step].header}</Text>
        <Text style={styles.description}>{content[step].description}</Text>

        <FlatList
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
  );
}
