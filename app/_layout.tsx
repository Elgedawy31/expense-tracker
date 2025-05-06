import { colors } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
  <SafeAreaView style={{ flex: 1 }} >
    <StatusBar backgroundColor={colors.neutral900} barStyle='light-content' />
      <Stack screenOptions={{headerShown:false}} />
  </SafeAreaView>
  );
};

export default Layout;
