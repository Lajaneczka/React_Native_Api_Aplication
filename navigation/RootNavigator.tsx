import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from '../components/PostsScreen'
import { PostScreen } from '../components/PostScreen'



const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={PostsScreen} />
      <Stack.Screen name="Post Information" component={PostScreen} />
    </Stack.Navigator>
 
  );
};


