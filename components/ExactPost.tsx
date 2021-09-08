import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";



export const ExactPost = ({body, title}) => {

  return (
    <>
      <View style={styles.container}>
        <View>
     <Text>{title}</Text>
     </View>
     <View>
     <Text>{body}</Text>
     </View>
     {/* <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      /> */}
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});