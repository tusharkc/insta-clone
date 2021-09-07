import React from "react";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  View,
  ScrollView,
} from "react-native";
import { Icon, Avatar, Text } from "react-native-elements";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;

const HomeScreen = () => {
  const apiKey = "563492ad6f91700001000001cd92a8ae327d4be99f12df0692874fc6";
  const url =
    "https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=large&per_page=20&page=2";
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
      console.log(images);
    };
    fetchImg();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon size={25} name="camera" type="font-awesome" color="#000" />
        <Image
          style={styles.igLogo}
          source={require("../media/Images/igLogo.png")}
        />
        <Icon size={25} name="paper-plane-o" type="font-awesome" color="#000" />
      </View>

      <FlatList
        horizontal
        data={imgSrc}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <SafeAreaView>
              <View style={styles.storyBodyContainer}>
                <LinearGradient
                  start={[0, 0.5]}
                  end={[1, 0.5]}
                  colors={["#ff5f6d", "#ffc371"]}
                  style={styles.radient}
                >
                  <View style={styles.circleGradient}>
                    <Avatar
                      style={styles.stories}
                      size={80}
                      rounded
                      source={{ uri: item.src.portrait }}
                    />
                  </View>
                </LinearGradient>
                <Text h5 style={styles.userName}>
                  andy
                </Text>
              </View>
            </SafeAreaView>
          );
        }}
      />

      <FlatList
        data={imgSrc}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <SafeAreaView style={styles.feedContainer}>
              <View style={styles.line}></View>
              <View style={styles.userOptionsContainer}>
                <Image
                  style={styles.userImg}
                  source={{
                    uri: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                  }}
                />
                <Icon
                  style={styles.moreIcon}
                  size={25}
                  name="more-horizontal"
                  type="feather"
                  color="#000"
                />
                <Text h5 style={styles.userNameFeed}>
                  igCloneByTushar
                </Text>
              </View>

              <Image source={{ uri: item.src.portrait }} style={styles.feed} />

              <View style={styles.interactionContainer}>
                <View style={styles.iconMain}>
                  <Icon
                    style={styles.iconHeart}
                    size={25}
                    name="heart"
                    type="feather"
                    color="#000"
                  />
                  <Icon
                    style={styles.iconComment}
                    size={25}
                    name="comment"
                    type="fontisto"
                    color="#000"
                  />
                  <Icon
                    style={styles.iconShare}
                    size={25}
                    name="paper-plane-o"
                    type="font-awesome"
                    color="#000"
                  />
                </View>

                <Icon
                  style={styles.iconBookmark}
                  size={25}
                  name="bookmark"
                  type="feather"
                  color="#000"
                />
              </View>
            </SafeAreaView>
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
  headerContainer: {
    display: "flex",
    marginTop: 35,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: ScreenWidth - 15,
  },
  igLogo: {
    height: 35,
    width: 125,
    alignSelf: "center",
  },
  storyBodyContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    marginTop: 1,
    margin: 5,
    marginBottom: 80,
  },

  stories: {
    position: "absolute",
    height: 70,
    width: 70,
    left: 5,
    top: 5,
  },

  userName: {
    position: "absolute",
    top: 80,
    marginTop: 5,
  },
  circleGradient: {
    position: "relative",
    margin: 2,
    backgroundColor: "white",
    borderRadius: 50,
    height: 80,
    width: 80,
  },

  radient: {
    borderRadius: 50,
    position: "absolute",
    top: 3,
  },

  line: {
    backgroundColor: "#dbdbdb",
    width: ScreenWidth,
    height: 2,
  },

  feedContainer: {},
  userOptionsContainer: {
    position: "relative",
    height: 65,
    width: ScreenWidth,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  userImg: {
    position: "absolute",
    height: 40,
    width: 40,
    borderRadius: 50,
    left: 5,
    top: 15,
  },
  userNameFeed: {
    position: "absolute",
    left: 55,
    top: 25,
  },

  moreIcon: {
    marginLeft: 320,
    top: 5,
  },

  feed: {
    height: 400,
    width: ScreenWidth,
  },

  interactionContainer: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "space-around",
  },

  iconMain: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    margin: 10,
    marginRight: 220,
    height: 40,
  },

  iconHeart: {},

  iconComment: {},

  iconShare: {},

  iconBookmark: {
    marginRight: 10,
  },
});
