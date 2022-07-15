import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { default as loginStyles } from "../styles";
import styles from "./styles";

//custom Components
import SafeContainer from "../../shared/SafeContainer/SafeContainer";
import CustomButton from "../../shared/customButton/customButton";

import { LOGIN } from "../../../../appData/routes/Routes";

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  function handlePasswordRecorery() {
    email && navigation.navigate(LOGIN);
  }

  return (
    <SafeContainer>
      <View style={styles.container}>
        <Text style={loginStyles.screenHeader}>Recuperar senha</Text>

        <TextInput
          style={loginStyles.inputBox}
          value={email}
          placeholder="Digite seu endereço de e-mail"
          autoComplete="email"
          autoFocus={true}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <CustomButton
          displayText="Enviar Email"
          handlePress={handlePasswordRecorery}
        />
      </View>
    </SafeContainer>
  );
}

export default ForgotPasswordScreen;
