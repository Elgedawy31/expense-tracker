import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/welcome.tsx" />
      </Stack>
    </SafeAreaView>
  );
};

export default Layout;
