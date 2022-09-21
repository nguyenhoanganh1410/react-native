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
import ButtonApp from "./components/button/ButtonApp";
import HomeScreen from "./components/HomeScreen";
import Screen02 from "./components/Screen02";
import Screen03 from "./components/Screen03";
import ColorSCreen from "./components/ColorScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Provider from "./store/Provider";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ColorSCreen" component={ColorSCreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    // <View style={styles.container}>
    //   {/* <Screen03 /> */}
    //   {/* <ButtonApp /> */}
    //   {/* <HomeScreen /> */}
    //   <ColorSCreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
