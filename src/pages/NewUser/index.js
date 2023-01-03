import React from "react";
import { Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function NewUser() {
  const navigation = useNavigation(); // empilha as paginas

  return (
    <View
      style={{
        marginTop: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Cadastrar </Text>
      <Text onPress={() => navigation.navigate("Login")}> Voltar</Text>
    </View>
  );
}
