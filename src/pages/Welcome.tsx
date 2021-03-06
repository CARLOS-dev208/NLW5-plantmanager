import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import wateringImg from "./../../assets/watering.png";
export function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"} suas plantas {"\n"}de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.img} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <Button title={"R"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },

  img: {
    width: 292,
    height: 284,
  },
});
