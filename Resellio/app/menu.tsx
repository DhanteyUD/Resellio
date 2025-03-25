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
          <View className="flex-row w-full max-w-[600px] h-[100px] mx-auto mb-[10px] border dark:border-light border-dark rounded-[20px] overflow-hidden">
            <View className="w-[65%] pt-[10px] pl-[10px] pr-[5px] flex-grow">
              <Text className="dark:text-light text-dark text-[20px] underline font-[600]">
                {item?.title}
              </Text>
              <Text className="dark:text-light text-dark">
                {item?.description}
              </Text>
            </View>
            <Image
              source={MENU_IMAGES[item.id - 1]}
              className="h-[100px] w-[100px]"
            />
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
