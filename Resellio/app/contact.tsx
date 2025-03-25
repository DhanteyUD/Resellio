import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import contactUsImage from "@/assets/images/contact-us.webp";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Image source={contactUsImage} className="w-full h-full" />}
    >
      <View>
        <Text className="dark:text-light text-dark text-[20px] font-[700] mb-5">
          Resellio
        </Text>
        <Text className="dark:text-light text-dark mb-1">555 Apple Lane</Text>
        <Text className="dark:text-light text-dark mb-10">
          Silicon Valley, CA 55555
        </Text>

        <Text className="dark:text-light text-dark text-[20px] font-[700] mb-5">
          Phone
        </Text>
        <Text className="dark:text-light text-dark mb-10">(555) 555-5555</Text>

        <Text className="dark:text-light text-dark text-[20px] font-[700] mb-5">
          Email
        </Text>
        <Text className="dark:text-light text-dark mb-10">
          resellio@gmail.com
        </Text>
      </View>
    </ParallaxScrollView>
  );
}
