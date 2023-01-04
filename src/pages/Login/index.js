import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ContainerLogin,
  Logo,
  InputForm,
  BtnSubmitForm,
  TxtSubmitForm,
  LinkNewUser,
  ImageLogo,
  LoadingArea,
} from "../../styles/global";
import { ScrollView, Alert, ActivityIndicator } from "react-native";

import { useNavigation } from "@react-navigation/native";
const backend = {
  name: "Tester",
  img: "imagem",
  login: "login@gmail.com.br",
  password: "senha",
  token: "202106",
  erro: false,
  mensagem: "Login realizado com sucesso!",
};

export default function Login() {
  const navigation = useNavigation(); // empilha as paginas
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [v, setV] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyToken = async () => {
    setV(await AsyncStorage.getItem("@token"));
  };

  const validate = () => {
    if (!email) {
      Alert.alert("", "Email can`t be empty!");
      setLoading(false);
      return false;
    }
    if (!password) {
      Alert.alert("", "Password can`t be empty!");
      setLoading(false);
      return false;
    }
    return true;
  };
  const loginSubmit = () => {
    setLoading(true);
    if (!validate()) return;

    if (backend.erro) Alert.alert("", backend.mensagem);
    else {
      setLoading(false);

      AsyncStorage.setItem("@token", backend.token);
      AsyncStorage.setItem("@name", backend.name);
      AsyncStorage.setItem("@img", backend.img);
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    if (v) navigation.navigate("Home");
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContainerLogin>
        <Logo>
          <ImageLogo source={require("../../../assets/logo.png")} />
        </Logo>
        <InputForm
          placeholder="Email"
          autoCorrect={false}
          value={email}
          keyboardType={"email-address"}
          autoCapitalize="none"
          editable={!loading}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <InputForm
          placeholder="Senha"
          autoCorrect={false}
          value={password}
          secureTextEntry={true}
          editable={!loading}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <BtnSubmitForm disabled={loading} onPress={loginSubmit}>
          <TxtSubmitForm>Acessar</TxtSubmitForm>
        </BtnSubmitForm>

        <LinkNewUser
          onPress={() => {
            navigation.navigate("NewUser");
          }}
        >
          {" "}
          Cadastrar{" "}
        </LinkNewUser>
        <LinkNewUser
          onPress={() => {
            navigation.navigate("RecoverPassword");
          }}
        >
          {" "}
          Esqueci a senha{" "}
        </LinkNewUser>
        {loading && (
          <LoadingArea>
            <ActivityIndicator size={"large"} color="#fff" />
          </LoadingArea>
        )}
      </ContainerLogin>
    </ScrollView>
  );
}
