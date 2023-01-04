import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";

import { Container } from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation(); // empilha as paginas
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const getToken = async () => {
    setToken(await AsyncStorage.getItem("@token"));
  };
  const getUser = async () => {
    setUser({
      name: await AsyncStorage.getItem("@name"),
      img: await AsyncStorage.getItem("@img"),
    });
  };

  useEffect(() => {
    getToken();
    getUser();
  }, []);

  return (
    <Container>
      <Text>
        Bem vindo {user.name} - {user.img}
      </Text>
      <Text> Token: {token} </Text>
      <Text
        onPress={async () => {
          await AsyncStorage.removeItem("@token");
          await AsyncStorage.removeItem("@name");
          await AsyncStorage.removeItem("@img");
          navigation.navigate("Login");
        }}
      >
        {" "}
        Quit
      </Text>
    </Container>
  );
}
