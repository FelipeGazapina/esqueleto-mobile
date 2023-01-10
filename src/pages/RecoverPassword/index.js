import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/auth";

import { ScrollView, Alert, ActivityIndicator } from "react-native";
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

const backend = {
  token: "202106",
  erro: false,
  email: "teste@gmail.com",
  mensagem: "User not found.",
  codigo: "123456",
};

export default function RecoverPassword() {
  const navigation = useNavigation(); // empilha as paginas
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email) {
      Alert.alert("", "Email can`t be empty!");
      setLoading(false);
      return false;
    }
    return true;
  };

  const recoverPass = async () => {
    setLoading(true);
    if (!validate()) return;

    if (backend.erro) {
      Alert.alert("", backend.mensagem);
      setLoading(false);
    } else {
      setLoading(false);

      // verifica se existe email do usuario no sistema
      // await AsyncStorage.setItem("@token", backend.token);
      // signIn();
      navigation.navigate("KeyVerify");
    }
  };

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

        <BtnSubmitForm disabled={loading} onPress={recoverPass}>
          <TxtSubmitForm>Enviar</TxtSubmitForm>
        </BtnSubmitForm>

        {loading && (
          <LoadingArea>
            <ActivityIndicator size={"large"} color="#fff" />
          </LoadingArea>
        )}
        <LinkNewUser onPress={() => navigation.navigate("Login")}>
          {" "}
          Voltar
        </LinkNewUser>
      </ContainerLogin>
    </ScrollView>
  );
}
