import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import contactUsImage from "@/assets/images/contact-us.webp";
import Icon from "react-native-vector-icons/Ionicons";

import { companyInfo } from "@/constants/CompanyInfo";

export default function Contact() {
  const handleLocationPress = (address1: string, address2: string): void => {
    const address = encodeURIComponent(`${address1}, ${address2}`);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(googleMapsUrl);
  };

  const handlePhonePress = (phone: string): void => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleMessagePress = (message: string): void => {
    Linking.openURL(`sms:${message}`);
  };

  const handleMailPress = (mail: string): void => {
    Linking.openURL(`mailto:${mail}`);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Image source={contactUsImage} className="w-full h-full" />}
    >
      <View className="p-4">
        <View className="flex-row items-center mb-16">
          <Icon
            name="business-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <Text className="dark:text-light text-dark text-[20px] font-[700]">
            {companyInfo.name}
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            handleLocationPress(
              companyInfo.addressLine1,
              companyInfo.addressLine2
            )
          }
          className="flex-row items-center mb-10"
        >
          <Icon
            name="location-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <View>
            <Text className="dark:text-light text-dark">
              {companyInfo.addressLine1}
            </Text>
            <Text className="dark:text-light text-dark">
              {companyInfo.addressLine2}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handlePhonePress(companyInfo.phone)}
          className="flex-row items-center mb-5"
        >
          <Icon
            name="call-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <Text className="dark:text-light text-dark">{companyInfo.phone}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleMessagePress(companyInfo.message)}
          className="flex-row items-center mb-5"
        >
          <Icon
            name="chatbubble-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <Text className="dark:text-light text-dark">
            {companyInfo.message}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleMailPress(companyInfo.email)}
          className="flex-row items-center mb-10"
        >
          <Icon
            name="mail-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <Text className="dark:text-light text-dark">{companyInfo.email}</Text>
        </TouchableOpacity>

        <View className="flex-row items-center mb-10">
          <Icon
            name="time-outline"
            size={24}
            color="#4B5563"
            className="mr-5"
          />
          <Text className="dark:text-light text-dark">
            Monday - Friday: 9:00 AM - 5:00 PM
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}
