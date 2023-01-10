import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Container } from "../../styles/global";

export default function Profile() {
  const Tab = createBottomTabNavigator();

  return (
    <Container>
      <Text>Bem vindo ao seu perfil</Text>
    </Container>
  );
}
