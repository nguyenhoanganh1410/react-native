import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import Appstyles from "./style.scss";
import start from "../../image/phone_red.png";

export default function ItemFlat({ item, idSelected, onPress }) {
  const handleOnpress = () => {
    console.log(item.id);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        item.id === idSelected
          ? [Appstyles.item, Appstyles.choise]
          : [Appstyles.item]
      }
    >
      <View style={Appstyles.blockTop}>
        <View>
          <Image style={Appstyles.image} source={item.image} />
        </View>
        <View style={Appstyles.textContent}>
          <Text style={Appstyles.text}>{item.text}</Text>
          <Text style={Appstyles.branch}>{item.shop}</Text>
        </View>
      </View>
      <TouchableHighlight style={styles.button}>
        <View>
          <Text style={{ color: "white", fontWeight: "500" }}>CHAT</Text>
        </View>
      </TouchableHighlight>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    alignItems: "center",
    backgroundColor: "#FFD124",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 32,
    paddingRight: 32,
  },
});
