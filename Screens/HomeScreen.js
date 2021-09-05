import React from "react";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, FlatList } from "react-native";

const HomeScreen = () => {
  const apiKey = "563492ad6f91700001000001cd92a8ae327d4be99f12df0692874fc6";
  const url =
    "https://api.pexels.com/v1/search?query=motercycle&color=black&orientation=portrait&size=large&per_page=10";
  const [imgSrc, setImgSrc] = useState(null);

  const getImg = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });
      const { photos } = await response.json();
      return photos;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchImg = async () => {
      const images = await getImg();
      setImgSrc(images);
      console.log(images)
    };
    fetchImg();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={imgSrc}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Image
              source={{ uri: item.src.portrait }}
              style={{ width: 360, height: 700 }}
            />
          );
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
