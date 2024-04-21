import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);

   
    return () => clearTimeout(timer);
  }, []); 

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../../img/Logo.png")}
        style={styles.image} 
      />
      <Text style={styles.text}>Let's go to the barbecue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161A1D",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    width: "80%", 
    marginBottom: 20,
  },
  text: {
    color: "#FFF",
    fontSize: 24,
  },
});
