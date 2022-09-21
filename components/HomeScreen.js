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
  Image,
  TouchableOpacity,
} from "react-native";

import start from "../image/start.png";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { phones } from "../data/imageData";
import Appstyles from "./HomeScreen.scss";
import Contex from "../store/Context";
export default function HomeScreen({ navigation }) {
  const { state, depatch } = useContext(Contex);
  const { phone } = state;
  console.log(phone);
  const { src } = phone;

  return (
    <View style={Appstyles.container}>
      <View style={Appstyles.viewImage}>
        <Image style={Appstyles.image} source={src} />
      </View>
      <View style={Appstyles.content}>
        <View style={Appstyles.contentChild}>
          <Text style={{ fontSize: "18" }}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={Appstyles.block}>
            <View style={Appstyles.groupStart}>
              <Image style={Appstyles.start} source={start} />
              <Image style={Appstyles.start} source={start} />
              <Image style={Appstyles.start} source={start} />
              <Image style={Appstyles.start} source={start} />
              <Image style={Appstyles.start} source={start} />
            </View>
            <Text>(Xem 828 đánh giá)</Text>
          </View>

          <View style={Appstyles.block}>
            <Text>1.790.000 đ</Text>
            <Text
              style={{
                textDecorationLine: "line-through",
                marginLeft: 16,
                color: "#DDDDDD",
              }}
            >
              2.790.000 đ
            </Text>
          </View>
          <Text style={{ color: "red", fontWeight: "500" }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>

          <TouchableOpacity
            style={Appstyles.blockFour}
            onPress={() => navigation.navigate("ColorSCreen")}
          >
            <Text>4 MÀU-CHỌN MÀU</Text>
          </TouchableOpacity>
        </View>

        <TouchableHighlight style={styles.button}>
          <View>
            <Text style={{ color: "white", fontWeight: "500" }}>CHỌN MUA</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
