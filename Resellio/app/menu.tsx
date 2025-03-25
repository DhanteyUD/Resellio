import React from "react";
import { View, Text, Appearance, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <View>
      <Text>menu</Text>
    </View>
  );
}
