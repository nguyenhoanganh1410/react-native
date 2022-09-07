import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Screen01 from "./components/Screen01";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen01 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
