import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";

export const PostsScreen = ({ navigation }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const textBodyAdded = (text) => {
    return text
      .replaceAll("\\\n", " ")
      .split(" ")
      .slice(0, 5)
      .join(" ")
      .concat("...");
  };

  if (post.length === 0) {
    return <Text>"Trwa ładowanie"</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={post}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate("Post Information", { item })}
            >
              <View style={styles.item}>
                <View style={styles.title}> 
                  <Text style={styles.textTitle}>{item.title}</Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.textBody}>
                    {textBodyAdded(item.body)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#afeeee",
    justifyContent: "center",
  },
  title: {
    padding: 5,
  },
  body: {
    padding: 10,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
  },
  textBody: {
    textAlign: "center",
  },
});
