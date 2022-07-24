import React from "react";
import { View, Text, Image } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnHeader from "../shared/ReturnHeader/ReturnHeader";

import styles from "./styles";

function AboutScreen({ navigation }) {
  return (
    <SafeContainer>
      <View style={{ width: "80%" }}>
        <ReturnHeader title="Sobre o app" goBack={() => navigation.pop()} />
      </View>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/app/pixelQuizzes.png")}
          />
        </View>
        <View>
          <Text style={styles.header}>PixelQuizzes</Text>
          <Text style={styles.aboutText}>
            O PixelQuizzes é um aplicativo criado para facilitar o aprendizado
            de conteúdos que nem sempre são os melhores de se aprender. Através
            da nossa plataforma, prometemos facilitar a sua aprendizagem em
            conceitos dos mais variados tipos. Isso se dá pelo fato de usarmos
            uma metodologia inovadora para aprendizagem!
          </Text>
        </View>
      </View>
    </SafeContainer>
  );
}

export default AboutScreen;
