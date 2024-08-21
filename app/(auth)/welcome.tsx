import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex-1 h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex items-end justify-end p-5  "
      >
        <Text className="text-center font-JakartaBold text-md text-black">
          Skip
        </Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] rounded-full h-[4px] mx-1 bg-[#E2E8F0] " />
        }
        activeDot={
          <View className="w-[32px] rounded-full h-[4px] mx-1 bg-[#0286FF] " />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map(({ id, title, description, image }) => (
          <View key={id} className="flex items-center justify-center">
            <Image
              source={image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row justify-center items-center w-full mt-10">
              <Text className="text-center text-black text-3xl font-JakartaBold mx-10">
                {title}
              </Text>
            </View>
            <Text className="text-base font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        className="w-11/12 mt-10 mb-6"
        onPress={()=>(isLastSlide?router.replace('/(auth)/sign-up'):
         swiperRef.current?.scrollBy(1)   )}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
