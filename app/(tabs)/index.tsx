import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/Button";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import ScreenWraper from "@/components/ScreenWraper";

export default function home() {
  const handleLogout = async () => {
    signOut(auth);
  };
  return (
    <ScreenWraper style={{paddingHorizontal:8}}>
      <Button onPress={handleLogout}>
        <Typo color={colors.black}> Logout</Typo>
      </Button>
    </ScreenWraper>
  );
}
