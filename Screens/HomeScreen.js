import React from "react";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";

const HomeScreen = () => {
  const apiKey = "563492ad6f91700001000001cd92a8ae327d4be99f12df0692874fc6";
  const url = "https://api.pexels.com/v1/search?query=cars";
  const [imgSrc, setImgSrc] = useState("");

  const getImg = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });
      const json = await response.json();
      setImgSrc(json.photos[10].src["large"]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getImg();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ height: 450, width: 350, borderRadius: 2 }}
        source={{
          uri: imgSrc,
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
