import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";

import SafeContainer from "../shared/SafeContainer/SafeContainer";
import ReturnHeader from "../shared/ReturnHeader/ReturnHeader";
import CustomButton from "../shared/customButton/customButton";
import InferiorNavBar from "../shared/InferiorNavBar/InferiorNavBar";
import styles from "./styles";

import { ABOUTAPP, HISTORY, PROFILE } from "../../../appData/routes/Routes";
import { fetchUser } from "../../../api/client";

function Profile({ navigation }) {
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
      <View style={styles.container}>
        <ReturnHeader title={"Perfil"} goBack={() => navigation.pop()} />

        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: userData.profile_image }}
          />
        </View>

        <ProfileButton
          displayText="Seu histórico"
          handlePress={() => navigation.navigate(HISTORY)}
        />
        <ProfileButton
          displayText="Sobre o app"
          handlePress={() => navigation.navigate(ABOUTAPP)}
        />
        <InferiorNavBar active={PROFILE} handlePress={handleNavPress} />
      </View>
    </SafeContainer>
  );
}

function ProfileButton({ displayText, handlePress }) {
  return (
    <CustomButton
      containerStyle={styles.button}
      textStyle={styles.buttonText}
      displayText={displayText}
      handlePress={handlePress}
    />
  );
}

export default Profile;
