import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/base";
import React from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import { StyleSheet, View, Text, Modal } from "react-native";

const Posts = () => {
  const posts = [
    {
      id: 1,
      username: "jared_juarez_",
      img: require("../assets/img/1.png"),
      desc: "MIREEEEN",
    },
    {
      id: 2,
      username: "jared_juarez_",
      img: require("../assets/img/1.png"),
      desc: "MIREEEEN",
    },
    {
      id: 3,
      username: "santiago_lolero",
      img: require("../assets/img/2.png"),
      desc: "AHORA SOY FELIZ",
    },
  ];

  const navigation = useNavigation();

  const goToProfile = (item) => {
    navigation.navigate("Profile", { item });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <ScrollView style={{ flexDirection: "row" }}>
          <View
            style={{
              justifyContent: "flex-start",
              flexDirection: "row",
              marginTop: 60,
            }}
          >
            <TouchableOpacity onPress={() => Modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/1.png")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                Tu historia
              </Card.Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/2.png")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                santiago_lolero
              </Card.Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/1.png")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                You_Lover
              </Card.Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/1.png")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                dark_soul
              </Card.Title>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Modal}>
              <View style={styles.border}>
                <Card.Image
                  source={require("../assets/img/1.png")}
                  style={styles.stories}
                />
              </View>
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 5,
                }}
              >
                pollitF3liz.24
              </Card.Title>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>

      {posts.map((item) => (
        <Card
          key={item.username + item.id}
          containerStyle={{
            backgroundColor: "black",
            borderRadius: 0,
            borderColor: "black",
            width: "100%",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity onPress={() => goToProfile(item.id)}>
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <Card.Image source={item.img} style={styles.profilePic} />
              <Card.Title
                style={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignSelf: "center",
                  paddingTop: 20,
                }}
              >
                {item?.username}
              </Card.Title>
            </View>
          </TouchableOpacity>
          <Card.Divider />
          <Card.Image source={item.img} style={styles.img} />
          <Card.Divider />
          <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
            <Card.Image
              source={require("../assets/img/1.png")}
              style={styles.liked}
            />
            <Card.Title
              style={{
                color: "white",
                fontWeight: "bold",
                justifyContent: "center",
                alignSelf: "center",
                paddingTop: 20,
              }}
            >
              You liked
            </Card.Title>
          </View>
          <View style={styles.container2}>
            <Text style={styles.descU}>{item.username}:</Text>
            <Text style={styles.desc}>{item.desc}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "auto",
    height: 500,
    alignSelf: "center",
  },

  container: {
    backgroundColor: "black",
  },

  container2: {
    backgroundColor: "black",
    flexDirection: "row",
    marginStart: 0,
  },

  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },

  desc: {
    color: "white",
    padding: 10,
    fontSize: 16,
    width: "90%",
  },

  descU: {
    color: "white",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  stories: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },

  border: {
    margin: 5,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: "flex-start",
  },

  liked: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignSelf: "flex-start",
    margin: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Posts;
