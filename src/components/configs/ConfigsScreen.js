import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnHeader from "../shared/ReturnHeader/ReturnHeader";
import InferiorNavBar from "../shared/InferiorNavBar/InferiorNavBar";
import ConfigButton from "./ConfigButton";

import styles from "./styles";
import { CONFIGS } from "../../../appData/routes/Routes";
import { fetchUser } from "../../../api/client";

function ConfigsScreen({ navigation }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function getUser() {
      const { success, data } = await fetchUser();

      success && setUserData(data);
    }

    getUser();
  }, []);

  function handleNavPress(route) {
    navigation.navigate(route);
  }

  return (
    <SafeContainer>
      <View style={{ width: "88%" }}>
        <ReturnHeader title="Configurações" goBack={() => navigation.pop()} />
      </View>
      <View style={styles.container}>
        <Text style={styles.accountInfo}>Informações da sua conta</Text>
        <ConfigButton
          icon={require("../../../assets/icons/configs/profile.png")}
          configName={"Nome"}
          configValue={userData.name}
        />
        <ConfigButton
          icon={require("../../../assets/icons/configs/profile.png")}
          configName={"Foto de Perfil"}
        />
        <ConfigButton
          icon={require("../../../assets/icons/configs/mail.png")}
          configName={"Email"}
          configValue={userData.email}
        />
        <ConfigButton
          icon={require("../../../assets/icons/configs/password.png")}
          configName={"Senha"}
          configValue={userData.password_changed_data || "Nunca foi alterada"}
        />
      </View>
      <InferiorNavBar active={CONFIGS} handlePress={handleNavPress} />
    </SafeContainer>
  );
}

export default ConfigsScreen;
