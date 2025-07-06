import { Stack } from "expo-router";

const layout = () => {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome" />
        <Stack.Screen name="signIn" />
        <Stack.Screen name="register" />
      </Stack>
  );
};

export default layout;
