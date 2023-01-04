import React, { useState, useEffect, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./context/auth";
import { getValToken } from "./services/auth";

const Stack = createNativeStackNavigator();

import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import RecoverPassword from "./pages/RecoverPassword";
import Home from "./pages/Home";

export default function Routes() {
  const [validated, setValidated] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: async () => {
        const valToken = AsyncStorage.getItem("@token");
        setValidated(valToken);
      },
    };
  }, []);

  const getToken = async () => {
    try {
      const valToken = await getValToken();
      if (valToken !== null) {
        const valToken = AsyncStorage.getItem("@token");
        setValidated(valToken);
      } else {
        setValidated(null);
        throw new Error("");
      }
    } catch (error) {
      setValidated(null);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {validated ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: "Home", headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login", headerShown: false }}
            />
            <Stack.Screen
              name="NewUser"
              component={NewUser}
              options={{ title: "Cadastrar", headerShown: false }}
            />
            <Stack.Screen
              name="RecoverPassword"
              component={RecoverPassword}
              options={{ title: "Recuperar a senha", headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
