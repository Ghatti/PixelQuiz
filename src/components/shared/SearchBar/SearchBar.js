import React, { createContext, useEffect, useState } from "react";
import { View, TextInput, Pressable, Image } from "react-native";

import styles from "./styles";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.inputBoxContainer}>
      <TextInput
        value={searchTerm}
        placeholder="Pesquisar quiz"
        onChangeText={setSearchTerm}
      />
      <Pressable
        style={styles.submitButton}
        onPress={() => handleSearch(searchTerm)}
      >
        <Image
          style={styles.submitIcon}
          source={require("../../../../assets/icons/search2.png")}
        />
      </Pressable>
    </View>
  );
}

export default SearchBar;
