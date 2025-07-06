import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";

export default function home() {
  const handleLogout = async () => {
    signOut(auth);
  };
  return (
    <View>
      <Text>home</Text>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}> Logout</Typo>
      </Button>
    </View>
  );
}
