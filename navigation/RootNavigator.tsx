import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};