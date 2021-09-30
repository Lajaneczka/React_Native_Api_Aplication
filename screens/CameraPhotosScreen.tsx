// import * as React from "react";
// import { FlatList, Text, SafeAreaView, Button, Image } from "react-native";
// import { useState, useCallback } from "react";
// import { Camera } from 'expo-camera';
// import {
//   Asset,
//   createAssetAsync,
//   getPermissionsAsync,
//   requestPermissionsAsync,
// } from "expo-media-library";

// export const CameraPhotos = () => {
//   const [photos, setPhotos] = useState<Asset[]>([]);

//   const renderItem = useCallback(
//     ({ item }) => (
//       <Image
//         style={{
//           width: 100,
//           height: 100,
//         }}
//       />
//     ),
//     []
//   );

//   const takePicture = async () => {
//     const permission = await getPermissionsAsync();
//     if (!permission.granted) {
//       await requestPermissionsAsync();
//     }
//     const { uri } = await Camera.takePictureAsync();
//     const asset = await createAssetAsync(uri);
//     setPhotos(asset);
//   };

//   return (
//     <SafeAreaView>
//       <Text>gallery screen</Text>
//       <Button icon="camera" mode="contained" onPress={takePicture}>
//         take a picture
//       </Button>
//       <FlatList
//         data={photos}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//     </SafeAreaView>
//   );
// };

import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Camera } from "expo-camera";
import { createAssetAsync } from "expo-media-library";

export const CameraPhotosScreen = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const camera = useRef<Camera>() as MutableRefObject<Camera>;
  const [savedPhoto, setSavedPhoto] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    // const data = await camera.takePictureAsync(options);
    const photo = await camera.current.takePictureAsync();
    console.log(photo);
    setSavedPhoto(photo.uri);
  };

  const takeNextPicture = () => {
    setSavedPhoto("");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (savedPhoto === "") {
    return (
      <View style={styles.container}>
        <Camera ref={camera} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => takePicture()}
              style={{ width: 150, height: 50, backgroundColor: "tomato" }}
            >
              <Text>take photo</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: savedPhoto }}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
        <TouchableOpacity
          onPress={() => takeNextPicture()}
          style={{ width: 150, height: 50, backgroundColor: "tomato" }}
        >
          <Text>take photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
