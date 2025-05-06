import { StatusBar, View } from "react-native";
import React from "react";
import { ScreenWrapperProps } from "@/types";
import { colors } from "@/constants/theme";

const ScreenWraper = ({ style, children }: ScreenWrapperProps) => {
  return (
    <View style={[{ flex: 1, backgroundColor: colors.neutral900 }, style]}>
          <StatusBar backgroundColor={colors.neutral900} barStyle='light-content' />
      
      {children}
    </View>
  );
};

export default ScreenWraper;
