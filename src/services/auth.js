import AsyncStorage from "@react-native-async-storage/async-storage";

const backend = {
  name: "Tester",
  img: "imagem",
  login: "login@gmail.com.br",
  password: "senha",
  token: "202106",
  erro: false,
  mensagem: "Login realizado com sucesso!",
};

export const getValToken = async () => {
  await valUser();
  const valToken = await AsyncStorage.getItem("@token");

  if (valToken != null) {
    return valToken;
  } else {
    return null;
  }
};

const valUser = async () => {
  const valToken = await AsyncStorage.getItem("@token");

  // verificar no backend o token
  const headers = {
    headers: {
      Authorization: "Bearer " + valToken,
    },
  };

  if (valToken == backend.token) {
    await AsyncStorage.setItem("@name", backend.name);
    await AsyncStorage.setItem("@img", backend.img);
    return valToken;
  } else {
    await AsyncStorage.removeItem("@token");
    await AsyncStorage.removeItem("@name");
    await AsyncStorage.removeItem("@img");

    throw new Error("");
  }
};
