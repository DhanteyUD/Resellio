import { View, Text, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import { BlurView } from "expo-blur";

import Icon from "react-native-vector-icons/Ionicons";
import greyBG from "@/assets/images/grey-bg.png";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={greyBG}
      resizeMode="cover"
      className="dark:bg-black bg-white flex-1 pt-12 pb-5 px-5"
    >
      <View className="relative flex flex-1">
        <Text className="dark:text-white text-gray-800 text-[35px]">
          Resellio
        </Text>

        <View className="absolute flex bottom-0 w-full rounded-[20px] overflow-hidden">
          <BlurView
            intensity={80}
            tint="dark"
            className="flex flex-row justify-evenly items-center p-5"
          >
            <Link href="/menu" asChild>
              <Pressable>
                <Icon
                  name="menu-outline"
                  size={24}
                  className="mr-5 dark:!text-text-400 !text-white"
                />
              </Pressable>
            </Link>
            <Link href="/contact" asChild>
              <Pressable>
                <Icon
                  name="mail-outline"
                  size={24}
                  className="mr-5 dark:!text-text-400 !text-white"
                />
              </Pressable>
            </Link>
          </BlurView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
