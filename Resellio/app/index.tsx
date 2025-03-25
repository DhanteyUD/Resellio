import { View, Text, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";

import greyBG from "@/assets/images/grey-bg.png";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={greyBG}
      resizeMode="cover"
      className="dark:bg-black bg-white flex-1 pt-12 pb-5 px-5"
    >
      <View className="flex flex-1">
        <Text className="dark:text-white text-gray-800 text-[35px]">Resellio</Text>

        <Link href="/menu" asChild>
          <Pressable className="bg-black w-[100px] rounded-md p-3 mt-5 flex justify-center items-center">
            <Text className="text-white">Menu</Text>
          </Pressable>
        </Link>
        <Link href="/contact" asChild>
          <Pressable className="bg-black w-[100px] rounded-md p-3 mt-5 flex justify-center items-center">
            <Text className="text-white">Contact Us</Text>
          </Pressable>
        </Link>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
