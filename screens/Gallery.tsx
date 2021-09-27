import * as React from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";
import { useState, useCallback } from "react";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Asset,
  getAssetsAsync,
  getPermissionsAsync,
  requestPermissionsAsync,
} from "expo-media-library";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Gallery = () => {
  const [asset, setAsset] = useState<Asset[]>([]);
  const [columns, setColumns] = useState(2);

  const renderItem = useCallback(
    ({ item }) => (
      <Image
        style={{
          width: windowWidth / columns,
          height: windowHeight / 3,
        }}
        source={{ uri: item.uri }}
      />
    ),
    [columns]
  );

  const onChangeColumns = useCallback((num: number) => {
    setColumns(num);
  }, []);

  const handleGallery = async () => {
    const permission = await getPermissionsAsync();
    if (!permission.granted) {
      await requestPermissionsAsync();
    }
    const gallery = await getAssetsAsync({ first: 100 });

    setAsset(gallery.assets);
  };

  return (
    <SafeAreaView>
      <Text>gallery screen</Text>
      <Button icon="home-alert" mode="contained" onPress={handleGallery}>
        show gallery
      </Button>
      <Button
        icon="home-alert"
        mode="contained"
        onPress={() => onChangeColumns(2)}
      >
        show gallery 2 columns
      </Button>
      <Button
        icon="home-alert"
        mode="contained"
        onPress={() => onChangeColumns(3)}
      >
        show gallery 3 columns
      </Button>
      <FlatList
        data={asset}
        renderItem={renderItem}
        // numColumns={2}
        contentContainerStyle={{ flexDirection: "row", flexWrap: "wrap" }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
