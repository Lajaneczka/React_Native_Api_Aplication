import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import { Post } from '../components/Post'
import { Comments } from '../components/Comments'



const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
 
  );
};


