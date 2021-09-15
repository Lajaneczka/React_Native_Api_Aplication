import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { Text, FlatList, SafeAreaView } from "react-native";
import { Posts } from "../components/Posts";


export const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const renderItem = useCallback(
    ({ item }) => (
      <Posts
        title={item.title}
        body={textBodyAdded(item.body)}
        onPress={() => navigation.navigate("Details", { item })}
      />
    ),
    []
  );

  const EmptyListMessage = useCallback(() => {
    if (posts.length === 0) {
      return <Text>"Trwa ładowanie"</Text>;
    }
  }, [posts]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const textBodyAdded = (text) => {
    return text
      .replace("\n", " ")
      .split(" ")
      .slice(0, 5)
      .join(" ")
      .concat("...");
  };

  if (posts.length === 0) {
    return <Text>"Trwa ładowanie"</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={renderItem}
        ListEmptyComponent={EmptyListMessage()}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
