import React, { useState } from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import styles from "./styles";

//custom Components
import SafeContainer from "../shared/SafeContainer/SafeContainer";
import CustomButton from "../shared/customButton/customButton";

function LoginScreen({ navigation }) {
  const ROUTES = {
    forgotPassword: "ForgotPassword",
    home: "Home",
    register: "Register",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (email !== "" && password !== "") {
      navigation.navigate(ROUTES.home);
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
        <Pressable onPress={() => navigation.navigate(ROUTES.forgotPassword)}>
          <Text style={styles.secondaryText}>Esqueceu sua senha?</Text>
        </Pressable>
        <CustomButton displayText="Entrar" handlePress={handleLogin} />
        <Pressable onPress={() => navigation.navigate(ROUTES.register)}>
          <Text style={styles.secondaryText}>Criar uma conta</Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

export default LoginScreen;
