import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="register" />
      </Stack>
    </SafeAreaView>
  );
};

export default layout;
