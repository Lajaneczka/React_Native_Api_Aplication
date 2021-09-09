import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ExactPost = ({ body, title, id }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        {/* <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{body}</Text>
        </View> */}
        {/* <Button
        title="go to comments"
        onPress={() => navigation.navigate("Comments")}
      /> */}
      </View>
      <FlatList
        data={body}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    
    </SafeAreaView>
  );
};


     {/* <FlatList
          data={isFiltered ? filteredArray : taskItems}
          renderItem={({ item: task }) => (
            <Task
              description={task.description}
              onDeletePress={handleDeleteTask(task.id)}
              onTaskSave={handleTaskSave}
              id={task.id}
            />
          )}
        /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
});
