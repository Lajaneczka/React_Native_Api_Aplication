import * as React from "react";
import { FlatList, Text, SafeAreaView, Button, Image } from "react-native";
import { useState, useCallback } from "react";
import {
  Asset,
  createAssetAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-media-library";

export const Camera = () => {
  const [photos, setPhotos] = useState<Asset[]>([]);

  const renderItem = useCallback(
    ({ item }) => (
      <Image
        style={{
          width: 100,
          height: 100,
        }}
      />
    ),
    []
  );

  const takePicture = async () => {
    const permission = await getPermissionsAsync();
    if (!permission.granted) {
      await requestPermissionsAsync();
    }
    const { uri } = await Camera.takePictureAsync();
    const asset = await createAssetAsync(uri);
    setPhotos(asset);
  };

  return (
    <SafeAreaView>
      <Text>gallery screen</Text>
      <Button icon="camera" mode="contained" onPress={takePicture}>
        take a picture
      </Button>
      <FlatList
        data={photos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
