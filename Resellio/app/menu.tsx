import React from "react";
import {
  View,
  Text,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import { remapProps } from "nativewind";
import { BlurView } from "expo-blur";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

remapProps(FlatList, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
});

export default function MenuScreen() {
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const Separator = () => (
    <View className="h-[1px] dark:bg-light bg-dark w-[50%] max-w-[300px] mx-auto mb-[10px]" />
  );
  const Header = () => (
    <Text className="dark:text-light text-dark text-[20px] font-bold text-center mt-[20px]">
      Top of List
    </Text>
  );
  const Footer = () => (
    <Text className="dark:text-light text-dark text-[20px] font-bold text-center mt-[20px]">
      End of List
    </Text>
  );

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        className="p-4 dark:bg-dark bg-light"
        contentContainerClassName="pt-[10px] pb-[20px] px-[12px]"
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={styles.listCompStyle}
        ListFooterComponent={Footer}
        ListFooterComponentStyle={styles.listCompStyle}
        ListEmptyComponent={
          <Text className="mx-auto dark:text-light text-dark ">No items</Text>
        }
        renderItem={({ item }) => (
          <View className="relative flex-row w-full max-w-[600px] h-[200px] mx-auto mb-[10px] border dark:border-light border-dark rounded-[15px] overflow-hidden">
            <Image
              source={MENU_IMAGES[item.id - 1]}
              className="h-full w-full"
            />

            <View className="absolute bottom-[15px] left-[15px] w-[55%] rounded-[10px] overflow-hidden">
              <BlurView intensity={120} tint="dark" className="p-[10px]">
                <Text className="text-light text-[20px] font-[600]">
                  {item?.title}
                </Text>
                <Text className="text-light">{item?.description}</Text>
              </BlurView>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  listCompStyle: {
    marginBottom: 30,
  },
});
