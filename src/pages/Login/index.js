import React, { useState } from "react";
import styles from "../../styles/LoginStyle";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const backend = {
  login: "login@gmail.com.br",
  password: "senha",
  token: "teste token para conectar no backend",
  erro: false,
  mensagem: "Login realizado com sucesso!",
};

export default function Login() {
  const navigation = useNavigation(); // empilha as paginas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (!email) {
      Alert.alert("", "Email can`t be empty!");
      return false;
    }
    if (!password) {
      Alert.alert("", "Password can`t be empty!");
      return false;
    }
  };
  const loginSubmit = () => {
    if (!validate()) return;

    if (backend.erro) Alert.alert("", backend.mensagem);
    else Alert.alert("", backend.mensagem);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../../../assets/logo.png")} />
      </View>
      <TextInput
        style={styles.inputForm}
        placeholder="Email"
        autoCorrect={false}
        value={email}
        keyboardType={"email-address"}
        autoCapitalize="none"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.inputForm}
        placeholder="Senha"
        autoCorrect={false}
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <TouchableOpacity style={styles.btnSubmitForm} onPress={loginSubmit}>
        <Text style={styles.txtSubmitForm}>Acessar</Text>
      </TouchableOpacity>

      <Text
        onPress={() => {
          navigation.navigate("NewUser");
        }}
        style={styles.linkNewUser}
      >
        {" "}
        Cadastrar{" "}
      </Text>
      <Text
        onPress={() => {
          navigation.navigate("RecoverPassword");
        }}
        style={styles.linkNewUser}
      >
        {" "}
        Esqueci a senha{" "}
      </Text>
    </View>
  );
}
