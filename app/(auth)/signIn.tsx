import React from "react";
import Typo from "@/components/Typo";
import ScreenWraper from "@/components/ScreenWraper";
import BackButton from "@/components/BackButton";
import { StyleSheet, View } from "react-native";
import { verticalScale } from "@/utils/styling";
import { spacingX } from "@/constants/theme";

const signIn = () => {
  return (
    <ScreenWraper>
      <View style={styles.container}>
        <BackButton />
      </View>
    </ScreenWraper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(10),
    marginHorizontal: spacingX._20,
  },
});

export default signIn;
