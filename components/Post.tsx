import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { useEffect, useState } from "react";
import { ExactPost } from "./ExactPost";



export const Post = ({ navigation }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(post);

  if (post.length === 0) {
    return <Text>"Trwa ładowanie"</Text>;
  }

  return (
    // <View style={styles.container}>
    //   <Button
    //     title="go to comments"
    //     onPress={() => navigation.navigate("Comments")}
    //   />
    //   {/* {post.map(el => {
    //       return <ExactPost
    //         key={el.id}
    //         title={el.title}
    //         body={el.body}
    //       />
    //   })} */}

      <FlatList
        data={post}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
              <View style={styles.item}>
                  <View style={styles.title}>
                <Text style={styles.textTitle}>{item.title}</Text>
                </View>
                <View style={styles.body}>
                <Text style={styles.textBody}>{item.body.replaceAll("\\\n"," ").split(' ').slice(0,5).join(' ')}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
        keyExtractor={(item, index) => index}
      />
    
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
       textAlign: 'center',
       fontSize: 20,
       fontWeight: '600',
   },
   textBody: {
    textAlign: 'center',
    
   }
});
