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
  FlatList,
} from "react-native";
import ItemFlat from "./ItemFlat";
import Appstyles from "./style.scss";
import { items } from "../../data/imageData";

const FlatList_Header = () => {
  return (
    <View
      style={{
        height: 65,
        width: "100%",
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#00B8D4",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 24, color: "white" }}> FlatList Header </Text>
    </View>
  );
};

export default function ListItem() {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => (
    <ItemFlat
      item={item}
      idSelected={selectedId}
      onPress={() => setSelectedId(item.id)}
    />
  );
  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        ListHeaderComponent={FlatList_Header}
        ListHeaderComponentStyle={{
          marginBottom: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
