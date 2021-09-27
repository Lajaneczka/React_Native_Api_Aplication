import * as React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Gallery } from "../screens/Gallery";
import { StackNavigator } from "./StackNavigator";


const Tab = createMaterialBottomTabNavigator();



export const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={StackNavigator} />
      <Tab.Screen name="Gallery" component={Gallery} />
    </Tab.Navigator>
  );
};
