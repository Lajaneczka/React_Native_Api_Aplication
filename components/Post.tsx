import * as React from "react";
import { StyleSheet, Text, View } from 'react-native';



export const Post =() => {
    return (
        <View style={styles.container}>
        <Text>test1</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });