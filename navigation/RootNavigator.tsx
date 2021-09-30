import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { GalleryScreen } from "../screens/GalleryScreen";
import { StackNavigator } from "./StackNavigator";
import { CameraPhotosScreen } from "../screens/CameraPhotosScreen";

const Tab = createMaterialBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={StackNavigator} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
      <Tab.Screen name="CameraPhotos" component={CameraPhotosScreen} />
    </Tab.Navigator>
  );
};
