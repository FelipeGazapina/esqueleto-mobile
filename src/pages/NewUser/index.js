import React, { useState } from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
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

import { useNavigation } from "@react-navigation/native";

export default function NewUser() {
  const navigation = useNavigation(); // empilha as paginas
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!name) {
      Alert.alert("", "Name can`t be empty!");
      setLoading(false);
      return false;
    }
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
  const addUser = () => {
    setLoading(true);
    if (!validate()) return;

    Alert.alert("", "User saved!");
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ContainerLogin>
        <Logo>
          <ImageLogo source={require("../../../assets/logo.png")} />
        </Logo>
        <InputForm
          placeholder="Name"
          autoCorrect={false}
          value={name}
          autoCapitalize="none"
          editable={!loading}
          onChangeText={(text) => {
            setName(text);
          }}
        />
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
          placeholder="Password"
          autoCorrect={false}
          value={password}
          secureTextEntry={true}
          editable={loading}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />

        <BtnSubmitForm disabled={loading} onPress={addUser}>
          <TxtSubmitForm>Cadastrar</TxtSubmitForm>
        </BtnSubmitForm>

        <LinkNewUser
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Voltar
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
