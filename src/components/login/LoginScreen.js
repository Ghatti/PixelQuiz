import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from "./styles";

//custom Components
import SafeContainer from "../shared/SafeContainer/SafeContainer";
import CustomButton from "../shared/customButton/customButton";
import SecondaryText from "../shared/SecondaryText/SecondaryText";

//Routes

import {
  FORGOTPASSWORD,
  HOME,
  REGISTER,
} from "../../../appData/routes/Routes";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email !== "" && password !== "") {
      navigation.navigate(HOME);
    }
  }
  return (
    <SafeContainer>
      <View style={styles.container}>
        <Text style={styles.screenHeader}>Entrar</Text>

        <TextInput
          style={styles.inputBox}
          value={email}
          placeholder="Email"
          autoComplete="email"
          autoFocus={true}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.inputBox}
          value={password}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => navigation.navigate(FORGOTPASSWORD)}>
          <SecondaryText value="Esqueceu sua senha?" />
        </Pressable>
        <CustomButton displayText="Entrar" handlePress={handleLogin} />
        <Pressable onPress={() => navigation.navigate(REGISTER)}>
          <SecondaryText value="Criar uma conta" />
        </Pressable>
      </View>
    </SafeContainer>
  );
}

export default LoginScreen;
