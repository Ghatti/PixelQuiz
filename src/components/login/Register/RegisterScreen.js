import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { default as loginStyles } from "../styles";
import styles from "./styles";

//custom Components
import SafeContainer from "../../shared/SafeContainer/SafeContainer";
import CustomButton from "../../shared/customButton/customButton";

import { HOME, LOGIN } from "../../../../appData/routes/Routes";
import SecondaryText from "../../shared/SecondaryText/SecondaryText";

function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    nome && email && password && navigation.navigate(HOME);
  }

  return (
    <SafeContainer>
      <View style={styles.container}>
        <Text style={loginStyles.screenHeader}>Cadastre-se</Text>
        <SecondaryText value="Crie uma conta gratuitamente" />

        <TextInput
          style={loginStyles.inputBox}
          value={nome}
          placeholder="Nome"
          autoFocus={true}
          onChangeText={setNome}
        />
        <TextInput
          style={loginStyles.inputBox}
          value={email}
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={loginStyles.inputBox}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setPassword}
        />

        <CustomButton displayText="Cadastrar-se" handlePress={handleRegister} />
        <Pressable onPress={() => navigation.navigate(LOGIN)}>
          <SecondaryText value="Entrar" />
        </Pressable>
      </View>
    </SafeContainer>
  );
}

export default RegisterScreen;
