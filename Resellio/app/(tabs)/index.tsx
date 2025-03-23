import { View, Text, ImageBackground } from "react-native";
import React from "react";
import greyBG from "@/assets/images/grey-bg.png";

const HomeScreen = () => {
  return (
    <ImageBackground source={greyBG} resizeMode="cover" className="flex-1 pt-12 pb-5 px-5">
      <View className="flex flex-1">
        <Text className="text-white text-[35px]">Resellio</Text>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
