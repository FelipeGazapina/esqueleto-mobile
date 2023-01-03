import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161616",
  },
  logo: { paddingBottom: 20 },
  inputForm: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 18,
    borderRadius: 6,
    padding: 10,
  },
  btnSubmitForm: {
    backgroundColor: "#ebb105",
    width: "90%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  txtSubmitForm: {
    color: "#fff",
    fontSize: 22,
  },
  linkNewUser: {
    color: "#fff",
    marginTop: 10,
    fontSize: 18,
  },
});

export default styles;
