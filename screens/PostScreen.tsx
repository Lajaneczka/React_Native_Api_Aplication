import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Posts } from "../components/Posts";

export const PostScreen = (props) => {
  const [comments, setComments] = useState([]);
  const { id, title, body } = props.route.params.item;

  const renderItem = useCallback(
    ({ item }) => (
      <TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.nameItem}>
            <Text style={styles.textTitle}>{item.name}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.textEmail}>{item.email}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.textBody}>{item.body}</Text>
          </View>
        </View>
      </TouchableOpacity>
    ),
    []
  );

  const EmptyListMessage = useCallback(() => {
    if (comments.length === 0) {
      return <Text>"Trwa ładowanie"</Text>;
    }
  }, [comments]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((resp) => resp.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Posts title={title} body={body} />
        <FlatList
          data={comments}
          renderItem={renderItem}
          ListEmptyComponent={EmptyListMessage()}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#afeeee",
  },
  nameItem: {
    padding: 5,
    fontWeight: "600",
  },
  body: {
    padding: 10,
  },
  textTitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
  textBody: {
    textAlign: "center",
  },
  textEmail: {
    fontWeight: "600",
    textAlign: "center",
  },
});
