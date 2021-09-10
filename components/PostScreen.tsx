import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const PostScreen = (props) => {
  const [comments, setComments] = useState([]);
  const { id, title, body } = props.route.params.item;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((resp) => resp.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (comments.length === 0) {
    return <Text>"Trwa ładowanie"</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <>
            <TouchableOpacity>
              <View style={styles.item}>
                <View>
                  <Text style={styles.textTitle}>{title}</Text>
                </View>
                <View>
                  <Text style={styles.textBody}>{body}</Text>
                </View>
                <View style={styles.nameItem}>
                  <Text style={styles.textTitle}>{item.name}</Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.textBody}>{item.email}</Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.textBody}>{item.body}</Text>
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
  nameItem: {
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
