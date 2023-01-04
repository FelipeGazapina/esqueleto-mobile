import React from "react";
import { Text, View } from "react-native";
import { ContainerLogin, TxtSubmitForm } from "../../styles/global";

import { useNavigation } from "@react-navigation/native";

export default function RecoverPassword() {
  const navigation = useNavigation(); // empilha as paginas

  return (
    <ContainerLogin>
      <TxtSubmitForm> Recuperar a senha </TxtSubmitForm>
      <TxtSubmitForm onPress={() => navigation.navigate("Login")}>
        {" "}
        Voltar
      </TxtSubmitForm>
    </ContainerLogin>
  );
}
