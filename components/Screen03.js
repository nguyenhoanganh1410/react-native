import { StatusBar } from "expo-status-bar";
import React from "react";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Alert,
  Image,
  KeyboardAvoidingView,
} from "react-native";

var radio_props = [
  { label: "Male", value: 0 },
  { label: "Female", value: 1 },
];
export default function Screen01() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REGISTER</Text>
      <TextInput style={styles.input} placeholder="Name" keyboardType="text" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="text" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="text" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="text"
      />
      <RadioForm
        radio_props={radio_props}
        initial={0}
        style={styles.custom}
        formHorizontal={true}
      />

      <TouchableHighlight style={styles.button}>
        <View>
          <Text>Register</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.text}> When you agree to terms and conditions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignContent: "center",
    paddingTop: 80,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    //backgroundColor: "#FEFBF6",
  },
  custom: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontSize: 30,

    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderRadius: 8,

    padding: 10,
    width: "100%",
    backgroundColor: "#F6F6F6",
  },
  button: {
    borderRadius: 6,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#FFD124",
    paddingBottom: 16,
    paddingTop: 16,
    paddingLeft: 48,
    paddingRight: 48,
  },
});
