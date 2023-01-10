import React, { useEffect, useState } from "react";
import { Text, FlatList, View } from "react-native";

import { ContainerList } from "../../styles/global";

const backend = [
  {
    age: 0,
    roles: "root",
    status: "A",
    name: "Root",
    username: "root",
    email: "suporte@equipedigital.com",
    password: "$2a$08$EKHij.DpQhufyOt0b3YXp.j59h9v.gw92Tb387BEP2f5MGif9Sp7O",
    avatar: "c510345e6b5152fc006ffab6e0f14a12.jpg",
  },
  {
    age: 21,
    roles: "root",
    status: "A",
    name: "Felipe",
    username: "Felipe",
    email: "felipe@equipedigital.com",
    password: "$2a$08$loXlOo2r/791vDztrRAdX.NKKW4KPCr6F4kZrtX7oj.BgivJWLPIu",
    avatar: "pogchamp-1024x576.png",
  },
  {
    age: 0,
    roles: "admin",
    status: "A",
    name: "HELP",
    username: "help",
    email: "help@equipedigital.com",
    password: "$2a$08$vyn5QC6nooY2zqYgHW8mXeAgn5/fYK9tkVciwmJYQ/6.ZcZ.TCyRS",
    avatar: "help.jpg",
  },
];

const Item = (data) => (
  <View>
    <Text>Nome: {data.name}</Text>
  </View>
);

export default function ListUsers() {
  const [users, setUsers] = useState([]);
  const renderItem = ({ item }) => {
    console.log(item);
    return <Item data={item} />;
  };

  useEffect(() => {
    setUsers(backend);
  }, []);

  return (
    <ContainerList>
      <Text>listagem</Text>
      {users && (
        <FlatList
          renderItem={renderItem}
          data={users}
          keyExtractor={(data) => data.name}
        />
      )}
    </ContainerList>
  );
}
