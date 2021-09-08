import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import { ExactPost } from "./ExactPost";


export const Post = ({ navigation }) => {
    const [post, setPost] = useState(false);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((resp) => resp.json())
          .then((data) => {
            setPost(data);
          })
          .catch((err) => console.log(err));
      }, []);

      console.log(post)

      if (!post) {
        return <Text>"Trwa ładowanie"</Text>;
      }

  return (
    <View style={styles.container}>
        
      <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      />
      <ExactPost data={(post.id)}/>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
