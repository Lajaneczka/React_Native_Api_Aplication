import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsScreen } from '../screens/PostsScreen'
import { PostScreen } from '../screens/PostScreen'



const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={PostsScreen} />
      <Stack.Screen name="Details" component={PostScreen} />
    </Stack.Navigator>
 
  );
};


