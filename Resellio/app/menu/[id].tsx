import { useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import { MENU_ITEMS } from "@/constants/MenuItems";
import menuImages from "@/constants/MenuImages";

export default function ItemScreen() {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  const viewedItem = MENU_ITEMS.find((item) => item.id.toString() === id);

  useEffect(() => {
    if (viewedItem) {
      navigation.setOptions({ title: viewedItem.title });
    }
  }, [viewedItem, navigation]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image source={menuImages[+id - 1]} className="w-full h-full" />
      }
    >
      <View className="flex flex-col justify-between p-4 h-[50vh] dark:bg-dark bg-light rounded-[0_0_20px_20px]">
        <View>
          <Text className="dark:text-light text-dark text-[20px] text-[700] font-bold">
            {viewedItem?.title}
          </Text>
          <Text className="dark:text-light text-dark">
            {viewedItem?.description}
          </Text>
          <Text className="dark:text-light text-dark mt-5">
            {viewedItem?.about}
          </Text>
        </View>

        <View className="w-full">
          <Pressable className="flex justify-center items-center h-[45px] rounded-[15px] bg-gray-300">
            <Text className="text-[18px] font-[600]">Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
