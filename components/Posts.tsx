import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

type PostProps = {
  title: string;
  body: string;
  onPress?: () => void;
};

export const Posts: React.FC<PostProps> = (props, { navigation }) => {
  const { title, body, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>{title}</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.textBody}>{body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#afeeee",
    backgroundColor: "#48d1cc",
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
