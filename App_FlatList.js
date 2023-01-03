import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
];

const Item = ({}) => (
  <View style={styles.text}>
    <Text style={styles.title}>
      Open up App.js to start working on your app!
    </Text>
  </View>
);

const App = () => {
  const renderItem = ({}) => <Item />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={DATA}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    backgroundColor: "#ff0000",
    height: 50,
    marginTop: 50,
    padding: 10,
    justifyContent: "center",
  },
  title: { color: "#fff" },
});

export default App;
