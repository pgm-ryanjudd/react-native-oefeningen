import React from "react";
import { Image, StyleSheet, View, SafeAreaView, StatusBar } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../chair.jpg")}
      ></Image>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primaryRed,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.primaryGreen,
    position: "absolute",
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
