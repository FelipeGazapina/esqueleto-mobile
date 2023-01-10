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
  erro: false,
};

export default function KeyVerify() {
  const navigation = useNavigation(); // empilha as paginas
  const { signIn } = useContext(AuthContext);
  const [userId, setUserId] = useState("");
  const [chave, setChave] = useState("");
  const [newPassword, setNewPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!chave && !password) {
      Alert.alert("", "Field can`t be empty!");
      setLoading(false);
      return false;
    }
    return true;
  };

  const checkKey = async () => {
    setLoading(true);
    if (!validate()) return;

    if (backend.erro) {
      Alert.alert("", "ERROR WHEN KEY WAS VERIFYED");
      setLoading(false);
    } else {
      setLoading(false);
      setNewPassword(true);
      // verifica se existe chave do usuario no sistema
      // await AsyncStorage.setItem("@token", backend.token);
      // signIn();
      setUserId(1);
    }
  };
  const sendPassword = async () => {
    setLoading(true);
    if (!validate()) return;

    if (backend.erro) {
      Alert.alert("", "ERROR TO SAVE NEW PASSWORD");
      setLoading(false);
    } else {
      setLoading(false);
      setNewPassword(false);
      // enviar nova senha
      // await AsyncStorage.setItem("@token", backend.token);
      // signIn();
      navigation.navigate("Login");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContainerLogin>
        <Logo>
          <ImageLogo source={require("../../../assets/logo.png")} />
        </Logo>
        {!newPassword ? (
          <>
            <InputForm
              placeholder="Chave"
              autoCorrect={false}
              value={chave}
              autoCapitalize="none"
              editable={!loading}
              onChangeText={(text) => {
                setChave(text);
              }}
            />
            <BtnSubmitForm disabled={loading} onPress={checkKey}>
              <TxtSubmitForm>Verificar chave</TxtSubmitForm>
            </BtnSubmitForm>
          </>
        ) : (
          <>
            <InputForm
              placeholder="Password"
              autoCorrect={false}
              value={password}
              keyboardType={"chave-address"}
              autoCapitalize="none"
              editable={!loading}
              onChangeText={(text) => {
                setPassword(text);
              }}
            />
            <BtnSubmitForm disabled={loading} onPress={sendPassword}>
              <TxtSubmitForm>Salvar</TxtSubmitForm>
            </BtnSubmitForm>
          </>
        )}

        {loading && (
          <LoadingArea>
            <ActivityIndicator size={"large"} color="#fff" />
          </LoadingArea>
        )}
      </ContainerLogin>
    </ScrollView>
  );
}
