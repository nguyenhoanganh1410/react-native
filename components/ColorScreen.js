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

import { phones } from "../data/imageData";
import { SetPhone } from "../store/Actions";
import Contex from "../store/Context";

import Appstyles from "./ColorScreen.scss";
export default function ColorScreen({ navigation }) {
  const { state, depatch } = useContext(Contex);
  const { phone } = state;

  const { id, src, image, color } = phone;
  console.log(phone);
  const [colorChose, setColorChose] = useState(id);

  const handlClick = (item) => {
    depatch(SetPhone(item));
    setColorChose(item.id);
  };
  return (
    <View style={Appstyles.container}>
      <View style={Appstyles.viewImage}>
        <Image style={Appstyles.img} source={src} />
        <View style={Appstyles.viewImageContent}>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text>
            Màu: <Text style={Appstyles.bold}>{color}</Text>
          </Text>
          <Text>
            Cung cấp bởi <Text style={Appstyles.bold}>Tiki Tradding</Text>
          </Text>
          <Text style={Appstyles.bold}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={Appstyles.bottom}>
        <View style={{ flex: 1 }}>
          <Text style={Appstyles.text}>Chọn một màu bên dưới:</Text>
          <View style={Appstyles.groupColor}>
            {phones.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => handlClick(item)}
                  key={item.key}
                >
                  <Image
                    key={item.key + "mvkfsm"}
                    style={
                      +colorChose == +item.id
                        ? (Appstyles.image, Appstyles.choise)
                        : Appstyles.image
                    }
                    source={item.image}
                    onClick={() => alert("You tapped the button!")}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen", { phone })}
        >
          <View>
            <Text style={{ color: "white", fontWeight: "500" }}>Xong</Text>
          </View>
        </TouchableOpacity>
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
    marginTop: 24,
  },
});
