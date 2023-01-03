import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Item = ({}) => <Text style={styles.title}>Page scroll</Text>;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }}>
        <Item />
      </View>
      <View style={{ flex: 2, backgroundColor: "skyblue" }}>
        <Item />
      </View>
      <View style={{ flex: 3, backgroundColor: "steelblue" }}>
        <Item />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: "#000",
  },
  title: { color: "#fff", fontSize: 16 },
});

export default App;
