import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import profile from "./assets/IMG_7057.jpg";
import cam from "./assets/icons8-compact-camera-48.png";

function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={profile} style={styles.image} />
        <Image source={cam} style={styles.cam} />
      </View>

      <View style={styles.content}>
        <View style={styles.pad}>
          <Text>School</Text>
          <Text style={styles.label}>Codetrain Africa</Text>
        </View>
        <View style={styles.pad}>
          <Text>Email Address</Text>
          <Text style={styles.label}>ernestanyomitse752@gmail.com</Text>
        </View>
        <View style={styles.pad}>
          <Text style={styles.title}>Name</Text>
          <Text style={[styles.label, styles.border]}>
            Ernest Delali Anyomitse
          </Text>
        </View>
        <View style={styles.pad}>
          <Text style={styles.title}>Nick Name</Text>
          <Text style={[styles.label, styles.border]}>Vhim</Text>
        </View>
        <View style={styles.pad}>
          <Text style={styles.title}>Emergency Contact</Text>
          <Text style={[styles.label, styles.border]}>020 431 4170</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>UPDATE PROFILE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 50,
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 75,
    position: "relative",
  },
  cam: {
    position: "absolute",
    borderRadius: 75,
    top: 200,
    right: 115,
  },
  bg: {
    backgroundColor: "#C0A394",
  },
  border: {
    borderBottomColor: "#C0A394",
    borderBottomWidth: 0.4,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    paddingBottom: 10,
  },
  info: {
    fontSize: 8,
  },
  content: {
    flex: 8,
    marginHorizontal: 50,
  },
  pad: {
    padding: 10,
  },
  title: {
    color: "#C0A394",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#C0A394",
    padding: 20,
    borderRadius: 50,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
  },
});

export default App;
