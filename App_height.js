import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Item = ({}) => <Text style={styles.title}>Page scroll</Text>;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: "20%", backgroundColor: "powderblue" }}>
        <Item />
      </View>
      <View style={{ height: "30%", backgroundColor: "skyblue" }}>
        <Item />
      </View>
      <View style={{ height: "50%", backgroundColor: "steelblue" }}>
        <Item />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: "100%",
    backgroundColor: "#000",
  },
  title: { color: "#fff", fontSize: 16 },
});

export default App;
