import React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { StyleSheet, SafeAreaView, Image } from "react-native";
import { Input, Icon, Button, Text } from "react-native-elements";

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const checkTextInput = () => {
    if (!userName.trim()) {
      alert("Please enter valid input");
      return;
    }
    if (!password.trim()) {
      alert("Please enter valid input");
      return;
    }

    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png",
        }}
      />
      <Input
        style={styles.input}
        placeholder="Username or Email"
        autoFocus={true}
        value={userName}
        onChangeText={(text) => setUserName(text)}
        leftIcon={{ type: "font-awesome", name: "user", color: "grey" }}
      />
      <Input
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
        leftIcon={{ type: "font-awesome", name: "lock", color: "grey" }}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPass}>Forgot Password</Text>
      </TouchableOpacity>
      <Button
        raised
        title="Log In"
        buttonStyle={styles.button}
        onPress={checkTextInput}
      />
      <Button raised title="Sign Up" buttonStyle={styles.buttonLogin} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},
  loginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: 350,
  },

  logo: {
    height: 100,
    width: 100,
  },

  input: {
    paddingLeft: 5,
  },
  button: {
    backgroundColor: "#4488FF",
    height: 50,
    width: 300,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonLogin: {
    height: 50,
    width: 300,
    marginTop: 20,
    backgroundColor: "black",
  },
  forgotPass: {
    color: "#4488FF",
    marginLeft: 230,
  },
});
