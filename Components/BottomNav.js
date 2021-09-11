import React from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";
import { Icon, Avatar, Text } from "react-native-elements";

let ScreenWidth = Dimensions.get("window").width;

const bottomNav = () => {
  return (
    <View>
      <View style={styles.navContainer}>
        <Icon size={25} name="home" type="feather" />
        <Icon size={25} name="search" type="fontisto" />
        <Icon size={25} name="camera" type="font-awesome" />
        <Icon size={25} name="heart" type="feather" />
        <Avatar
          style={styles.userAvatar}
          size={80}
          rounded
          source={{
            uri: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>
    </View>
  );
};

export default bottomNav;

const styles = StyleSheet.create({
  navContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    height: 50,
    width: ScreenWidth,
  },

  userAvatar : {
      height: 25,
      width: 25

  }
});
