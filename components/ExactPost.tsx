import * as React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";



export const ExactPost = ({data}) => {

  return (
    <>
      <View>
          {data}
      {/* {data.id.map((data) =>{
                <Text key={data.id}>{data.id}</Text>
            })}  */}
      </View>
    </>
  );
};
