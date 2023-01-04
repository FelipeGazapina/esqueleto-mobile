import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

import { Container } from "../../styles/global";

export default function Home() {
  return (
    <Container>
      <Text>Bem vindo</Text>
      <Text
        onPress={async () => {
          await AsyncStorage.removeItem("@token");
          await AsyncStorage.removeItem("@name");
          await AsyncStorage.removeItem("@img");
        }}
      >
        Quit
      </Text>
    </Container>
  );
}
